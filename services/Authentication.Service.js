const Account = require('../database/models/Account');

const VerifyByEmail = async (options = {}) => {
  const { email, password } = options;
  try {
    const account = await Account.findOne({ email }).exec();
    if (!account) return false;
    return await account.verifyPassword(password);
  } catch {
    return false;
  }
};

const VerifyByUserName = async (options = {}) => {
  const { username, password } = options;
  try {
    const account = await Account.findOne({ username }).exec();
    if (!account) return false;
    return await account.verifyPassword(password);
  } catch {
    return false;
  }
};

const Authenticate = async (options = {}) => {
  const { username, email, password } = options;
  console.log(options);
  try {
    const message = {
      success: null
    };
    if (email !== undefined) {
      message.success = await VerifyByEmail({ email, password });
    } else if (username !== undefined) {
      message.success = await VerifyByUserName({ username, password });
    } else {
      message.success = false;
    }
    console.log(message);
    return message;
  } catch (error) {
    return { success: false, error };
  }
};

module.exports = {
  Authenticate
};
