/* eslint-disable */
'use strict';
/* eslint-enable */

/* eslint-disable */
const config = require('@config');
/* eslint-enable */

const prefix = config.application.prefix.header;

const prefixMethod = `${prefix}-method`;
const prefixAccess = `${prefix}-access`;
const prefixStatus = `${prefix}-status`;

// const DEF_API_HEADERS = {
//   headers: {
//     method: {
//       name: null,
//       opt: null,
//       param: null
//     },
//     security: {
//       token: null,
//       auth: false,
//       account: {},
//       credencials: {}
//     },
//     status: {
//       success: false,
//       code: null,
//       message: '',
//       error: null
//     }
//   }
// };

const headerSanitize = async (header) => {
  const _header = {};
  Object.assign(_header, header);
  //
  _header[`${prefixMethod}-name`] = header[`${prefixMethod}-name`] || null;
  _header[`${prefixMethod}-opt`] = header[`${prefixMethod}-opt`] || null;
  _header[`${prefixMethod}-param`] = header[`${prefixMethod}-param`] || null;
  //
  _header[`${prefixAccess}-token`] = header[`${prefixAccess}-token`] || null;
  _header[`${prefixAccess}-auth`] = null;
  _header[`${prefixAccess}-account`] = null;
  _header[`${prefixAccess}-credencials`] = null;
  //
  _header[`${prefixStatus}-success`] = null;
  _header[`${prefixStatus}-code`] = null;
  _header[`${prefixStatus}-message`] = null;
  _header[`${prefixStatus}-error`] = null;
  // console.log(_header);
  return _header;
};

const bodySanitize = async (body) => {
  const sanitize = body;
  // console.log('BODY');
  // console.log(sanitize);
  return sanitize;
};

module.exports.sanitize = {
  header: headerSanitize,
  body: bodySanitize
};
