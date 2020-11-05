/* eslint-disable */
'use strict';
/* eslint-enable */

// require('dotenv').config();

const keys = require('../utils/keys');

module.exports = {
  // prefix: process.env.SECURITY_PREFIX || 'api',
  key: {
    public: keys.getPublicKey(),
    private: keys.getPrivateKey()
  },
  expiretime: '15m'
};
