const Account = require('../database/models/Account');

const Create = async (options = {}) => {
  const { username, email, password } = options;
  try {
    const account = new Account({
      username: username || '',
      email: email || '',
      password: password || ''
    });
    await account.save();
    return { success: true, id: account.id };
  } catch (error) {
    console.log(error);
    return { success: false, error };
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
    return { success: true, result };
  } catch (error) {
    return { success: false, error };
  }
};

module.exports = {
  Create,
  RemoveAll
};
