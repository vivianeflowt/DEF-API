const jwtwebtoken = require('jsonwebtoken');
const Account = require('../database/models/Account');

const { config } = global;

const SignIn = async (options = {}) => {
  const { username, email, password } = options;
  console.log(options);
  try {
    const account = await Account.findOne({ $or: [{ email }, { username }] }).exec();
    if (!account) return { success: false };
    const isVerified = (await account.verifyPassword(password)) || false;
    if (!isVerified) {
      return { success: false };
    }
    const { id } = account;
    console.log(id);
    const token = jwtwebtoken.sign({ id }, config.security.key.private, {
      expiresIn: '120m'
    });

    return { success: isVerified, token };
  } catch (error) {
    return { success: false, error };
  }
};

module.exports = {
  SignIn
};
