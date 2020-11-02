const Account = require('../database/models/Account');

const DEF_SERVICE_MESSAGE = {
  success: null,
  message: null
};

const MessageBuilder = async (data = {}) => {
  const result = {};
  Object.assign(result, DEF_SERVICE_MESSAGE);
  Object.assign(result, data);
  result.success = data.success || null;
  result.message = data.message || '';
  return result;
};

const Create = async (options = {}) => {
  const { username, email, password } = options;
  try {
    const account = new Account({
      username: username || '',
      email: email || '',
      password: password || ''
    });
    await account.save();
    return await MessageBuilder({ success: true, id: account.id });
  } catch (error) {
    console.log(error);
    return await MessageBuilder({ success: false, error });
  }
};

// const Update = (AccountDetails = {}) => {
//   //
// };

// const Remove = (AccountDetails = {}) => {
//   //
// };

// const Find = (AccountDetails = {}) => {
//   //
// };

const RemoveAll = async () => {
  try {
    const result = await Account.deleteMany({}).exec();
    console.log(result);
    return await MessageBuilder({ success: true, result });
  } catch (error) {
    return await MessageBuilder({ success: false, error });
  }
};

module.exports = {
  Create,
  RemoveAll
};
