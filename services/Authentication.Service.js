const Account = require('../database/models/Account');

const Authenticate = async (options = {}) => {
  const { username, email, password } = options;
  console.log(options);
  try {
    const account = await Account.findOne({ $or: [{ email }, { username }] }).exec();
    if (!account) return { success: false };
    const isVerified = (await account.verifyPassword(password)) || false;

    return { success: isVerified };
  } catch (error) {
    return { success: false, error };
  }
};

module.exports = {
  Authenticate
};
