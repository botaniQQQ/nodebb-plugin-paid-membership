'use strict';

let interkassa = {};
const winston = require.main.require('winston');
const meta = require.main.require('./src/meta');
const groups = require.main.require('./src/groups');
const user = require.main.require('./src/user');
const db = require.main.require('./src/database');
const notAllowed = require.main.require('./src/controllers/helpers').notAllowed;

interkassa.configure = () => {
    meta.settings.get('paid-membership', (err, settings) => {
        if (err) winston.info(err);

        if (!settings.ik_co_id || !settings.ik_am) {
            return winston.warn('[paid-membership] Plugin not configured (ik_co_id, ik_am)');
        }
    });
};

interkassa.isPaid = (uid, callback) => {
    db.isSortedSetMember('paid-membership:subscribed', uid, callback);
};

interkassa.paid = (req, res, next) => {
    if (!req.user) {
        return notAllowed(req, res);
    }

    interkassa.isPaid(req.user.uid, (err, isPaid) => {
        if (err) winston.info(err);

        if (isPaid) {
            res.redirect('/?status=already-subscribed');
            return;
        }

        meta.settings.get('paid-membership', (err, settings) => {
            if (err) {
                console.error(err);
            }
            res.render('subscribe', {
                ik_am: settings.ik_am,
                ik_cur: settings.ik_cur || 'UAH',
                notsetup: (!settings.ik_co_id || !settings.ik_am || !settings.key),
                title: "Paid Membership"
            });
        });
    });
};

interkassa.postPaid = (req, res, next) => {
    if (!req.user) {
        return notAllowed(req, res);
    }

    meta.settings.get('paid-membership', (err, settings) => {
        if (err) winston.info(err);

        let params = {
            "ik_pm_no": req.user.uid,
            "ik_co_id": settings.ik_co_id,
            "ik_am": settings.ik_am,
            "ik_cur": settings.ik_cur || 'UAH',
            "ik_desc": settings.ik_desc || 'PAID MEMBERSHIP'
        };

        let i = require('interkassa-node')(params, settings.key, true);

        res.redirect(i.url);
    });
};

interkassa.postInteraction = (req, res, next) => {
    meta.settings.get('paid-membership', (err, settings) => {
        if (err) winston.info(err);
        let i = require('interkassa-node')(req.body, settings.key, true);
        if (i.signature !== req.body.ik_sign || req.body.ik_inv_st !== 'success') {
            winston.error('[paid-membership]' + i.signature + ' != ' + req.body.ik_sign + ' ' + req.body.ik_inv_st);
            return res.status(404).send('404 Not Found');
        }
        db.sortedSetAdd('paid-membership:subscribed', Date.now(), req.body.ik_pm_no);
        user.setUserField(req.body.ik_pm_no, 'paid-membership:pid', req.body.ik_sign);
        if (settings['paid-group']) {
            groups.join(settings['paid-group'], req.body.ik_pm_no);
        }
        winston.info('[paid-membership] Success ID ' + req.body.ik_pm_no + ', SIGNATURE: ' + req.body.ik_sign);
        res.send('200 OK');
    });
};

module.exports = interkassa;