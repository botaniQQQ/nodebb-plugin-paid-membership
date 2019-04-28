"use strict";
/*global app, bootbox, ajaxify*/

$('document').ready(function () {
    $(window).on('action:ajaxify.end', function (err, data) {
        if (!ajaxify.currentPage) {
            var href = window.location.href;

            if (href.match('status=fail')) {
                app.alertError('Paid membership is not activated, please contact an administrator.');
            } else if (href.match('status=pending')) {
                app.alertSuccess('Paid membership in the process of registration.');
            } else if (href.match('status=success')) {
                app.alertSuccess('Paid membership successfully issued.');
            } else if (href.match('status=already-subscribed')) {
                app.alertSuccess('Paid membership has already been issued.');
            }
        }
    });
});