const { config } = global;

const { prefix } = config.security;

const prefix_method = `${prefix}-method`;
const prefix_access = `${prefix}-access`;
const prefix_status = `${prefix}-status`;

const DEF_API_HEADERS = {
  headers: {
    method: {
      name: null,
      opt: null,
      param: null
    },
    security: {
      token: null,
      auth: false,
      account: {},
      credencials: {}
    },
    status: {
      success: false,
      code: null,
      message: '',
      error: null
    }
  }
};

const headerSanitize = async (header) => {
  const _header = {};
  Object.assign(_header, header);
  //
  _header[`${prefix_method}-name`] = header[`${prefix_method}-name`] || null;
  _header[`${prefix_method}-opt`] = header[`${prefix_method}-opt`] || null;
  _header[`${prefix_method}-param`] = header[`${prefix_method}-param`] || null;
  //
  _header[`${prefix_access}-token`] = header[`${prefix_access}-token`] || null;
  _header[`${prefix_access}-auth`] = null;
  _header[`${prefix_access}-account`] = null;
  _header[`${prefix_access}-credencials`] = null;
  //
  _header[`${prefix_status}-success`] = null;
  _header[`${prefix_status}-code`] = null;
  _header[`${prefix_status}-message`] = null;
  _header[`${prefix_status}-error`] = null;
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
