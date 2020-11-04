const jwt = require('jsonwebtoken');
const crypto = require('crypto');
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
    const token = jwt.sign({ id }, config.security.key.private, {
      expiresIn: '1h'
    });
    return { success: isVerified, token };
  } catch (error) {
    console.log(error);
    return { success: false, error };
  }
};

const Verify = async (options = {}) => {
  const { accessToken } = options;
  if (!accessToken) {
    return { authorization: false, message: 'no token provided' };
  }

  const decoded = await jwt.verify(accessToken, config.security.key.private);
  if (!decoded) {
    return { authorization: false, message: 'invalid token' };
  }
  const refreshToken = await jwt.sign({ id: decoded.id }, config.security.key.private, {
    expiresIn: '1h'
  });

  return { authorization: true, token: refreshToken };
};

const Refresh = async (options = {}) => {
  //
};

module.exports = {
  SignIn,
  Verify
};
