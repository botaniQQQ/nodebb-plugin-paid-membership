'use strict';
/* globals $, app, socket */

define('admin/plugins/paid-membership', ['settings'], function (Settings) {

    var ACP = {};

    ACP.init = function () {
        Settings.load('paid-membership', $('.paid-membership-settings'));

        $('#save').on('click', function () {
            Settings.save('paid-membership', $('.paid-membership-settings'), function () {
                app.alert({
                    type: 'success',
                    alert_id: 'paid-membership-saved',
                    title: 'Settings Saved',
                    message: 'Please reload your NodeBB to apply these settings',
                    clickfn: function () {
                        socket.emit('admin.reload');
                    }
                });
            });
        });
    };

    return ACP;
});