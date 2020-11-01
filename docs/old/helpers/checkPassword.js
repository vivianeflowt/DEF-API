const bcrypt = require('bcrypt');

const saltRounds = 8;
const salt = bcrypt.genSaltSync(saltRounds);

module.exports = function (password = '') {
  return bcrypt.hashSync(password, salt);
};
