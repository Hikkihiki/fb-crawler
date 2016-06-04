'use strict'

var FB = require('fb');

module.exports.acquire = (callback) => {
    FB.api('oauth/access_token', {
        client_id: '1043951495691711',
        client_secret: '77f3368654e47192d7eb0f132cbe00e3',
        grant_type: 'client_credentials'
    }, function(res) {
        if (!res || res.error) {
            callback(null, res);
        }
        callback(res.access_token, null);
    });
}
