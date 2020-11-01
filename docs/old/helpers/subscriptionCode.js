const bcrypt = require('bcrypt');

const saltRounds = 8;
const salt = bcrypt.genSaltSync(saltRounds);

module.exports = function (uid = '') {
  return bcrypt.hashSync(uid, salt);
};
