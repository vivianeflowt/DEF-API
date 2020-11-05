/* eslint-disable */
'use strict';
/* eslint-enable */

const { request } = require('../../common/core/index');

module.exports = async (req, res, next) => {
  console.log('MAIN-REQUEST-MIDDLEWARE');
  req.headers = await request.sanitize.header(req.headers);
  req.body = await request.sanitize.body(req.body);
  next();
};
