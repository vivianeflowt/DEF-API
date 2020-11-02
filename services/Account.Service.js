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

const Create = async (options = {}) => {
  const { username, email, password } = options;
  try {
    const account = new Account({
      username: username || '',
      email: email || '',
      password: password || ''
    });
    await account.save();
    return MessageBuilder({ success: true, id: account.id });
  } catch (error) {
    console.log(error);
    return MessageBuilder({ success: false, error });
  }
};

const Find = async () => {
  try {
    const result = await Account.find({}).select('name username email').limit(50).exec();
    // console.log(result);
    return MessageBuilder({ success: true, result });
  } catch (error) {
    return MessageBuilder({ success: false, error });
  }
};

const Update = async (options = {}) => {
  const { email, values } = options;
  try {
    const account = await Account.updateOne({ email }, values);

    // console.log(result);
    return MessageBuilder({ success: true, id: account.id });
  } catch (error) {
    return MessageBuilder({ success: false, error });
  }
};

const RemoveAll = async () => {
  try {
    const result = await Account.deleteMany({}).exec();
    console.log(result);
    return MessageBuilder({ success: true, result });
  } catch (error) {
    return MessageBuilder({ success: false, error });
  }
};

module.exports = {
  Create,
  Find,
  Update,
  RemoveAll
};
