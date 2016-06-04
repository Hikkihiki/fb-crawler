'use strict'

var FB = require('fb');
var Step = require('step');

module.exports.acquire = (callback) => {
    Step(
        function acquire() {
            FB.napi('oauth/access_token', {
                client_id: '1043951495691711',
                client_secret: '77f3368654e47192d7eb0f132cbe00e3',
                grant_type: 'client_credentials'
            }, this)
        },
        function process(err, res) {
            callback(err, res && !err ? res.access_token : null);
        }
    );
}
