const Account = require('../database/models/Account');

const Authenticate = async (options = {}) => {
  const { username, email, password } = options;
  console.log(options);
  if (email !== undefined) {
    try {
      const result = await VerifyByEmail({ email, password });
      console.log(result);
      return { success: result };
    } catch (error) {
      return { success: false, error };
    }
  } else {
    try {
      const result = await VerifyByUserName({ username, password });
      console.log(result);
      return { success: result };
    } catch (error) {
      return { success: false, error };
    }
  }
};

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

module.exports = {
  Authenticate
};
