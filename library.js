"use strict";

const controllers = require('./lib/controllers');
const interkassa = require('./lib/interkassa');
const nconf = module.parent.require('nconf');
const plugin = {};

plugin.init = (params, callback) => {
    let router = params.router;
    let hostMiddleware = params.middleware;

    interkassa.configure();

    router.get(
        '/admin/plugins/paid-membership',
        hostMiddleware.admin.buildHeader,
        controllers.renderPaidMembership
    );
    router.get(
        '/api/admin/plugins/paid-membership',
        controllers.renderPaidMembership
    );

    router.get(
        '/paid-membership',
        hostMiddleware.buildHeader,
        interkassa.paid
    );
    router.get(
        '/api/paid-membership',
        interkassa.paid
    );

    router.post(
        '/paid-membership',
        interkassa.postPaid
    );

    router.post(
        '/interaction',
        interkassa.postInteraction
    );

    callback();
};

plugin.addAdminNavigation = (header, callback) => {
    header.plugins.push({
        route: '/plugins/paid-membership',
        icon: 'fa-user-plus',
        name: 'Paid Membership'
    });

    callback(null, header);
};

plugin.redirectToSubscribe = (data, callback) => {
    if (!data.req.uid || (!data.req.path.match('/topic') && !data.req.path.match('/category'))) {
        return callback(false, data);
    }

    let url = nconf.get('relative_path') + '/paid-membership';
    if (data.res.locals.isAPI) {
        data.res.status(308).json(url);
    } else {
        data.res.redirect(url);
    }
};

module.exports = plugin;