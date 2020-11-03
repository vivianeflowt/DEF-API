const Account = require('../database/models/Account');

const DEF_SERVICE_MESSAGE = {
  success: null,
  message: null
};

const MessageBuilder = (data = {}) => {
  const result = {};
  Object.assign(result, DEF_SERVICE_MESSAGE);
  Object.assign(result, data);
  result.success = data.success || null;
  result.message = data.message || '';
  return result;
};

const Authenticate = async (options = {}) => {
  const { username, email, password } = options;
  console.log(options);
  try {
    const account = await Account.findOne({ username, email }).exec();
    if (!account) return MessageBuilder({ success: false, message: 'access denied' });

    account.checkPassword(password, (error, isMatch) => {
      if (error) throw error;
      console.log(password, isMatch); // -&gt; Password123: true
    });

    return MessageBuilder({ success: true });
  } catch (error) {
    console.log(error);
    return MessageBuilder({ success: false, error });
  }
};

module.exports = {
  Authenticate
};
