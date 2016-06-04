'use strict';

var FB = require('fb');
var app_token = require('../lib/app_token');

module.exports.handler = function(event, context, callback) {
    app_token.acquire((token, err) => {
        if (err) {
            context.done(err, null);
            return;
        }
        FB.setAccessToken(token);
        FB.api('/medium', function(res) {
            if (res && res.error) {
                context.done(res.error, null);
            } else {
                context.done(null, res);
            }
        });
    });
};
