'use strict';

var FB = require('fb');

module.exports.handler = function(event, context, callback) {
    FB.api('/medium', function(res) {
        if (res && res.error) {
            context.done(res.error, null);
        } else {
            context.done(null, res);
        }
    });
};
