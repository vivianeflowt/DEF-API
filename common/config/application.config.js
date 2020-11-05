// require('dotenv').config();

module.exports = {
  name: process.env.APP_NAME || 'APP',
  prefix: {
    header: process.env.APP_PREFIX_HEADER || 'x-app'
  }
};
