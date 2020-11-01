const Account = require('../models/Account');

const Create = async (username, email, password) => {
  try {
    const account = new Account({ username, email, password });
    await account.save();
    return { success: true, id: account.id };
  } catch (error) {
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

module.exports = {
  Create
};
