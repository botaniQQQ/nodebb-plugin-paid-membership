'use strict';

let Controllers = {};
const groups = require.main.require('./src/groups');

Controllers.renderPaidMembership = (req, res, next) => {
    getGroupList((err, groups) => {
        if (err) {
            console.error(err);
        }
        return res.render('admin/plugins/paid-membership', {groups});
    });
};

const getGroupList = callback => {
    let list = [];
    groups.getGroups('groups:createtime', 0, -1, (err, groups) => {
        groups.forEach(group => {
            if (
                group.match(/cid:([0-9]*):/) === null &&
                group !== 'administrators' &&
                group !== 'registered-users'
            ) {
                list.push({
                    name: group,
                    value: group
                });
            }
        });
        callback(err, list);
    });
};

module.exports = Controllers;