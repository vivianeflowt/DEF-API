/* eslint-disable */
'use strict';
/* eslint-enable */

/* eslint-disable */
const Account = require('@models/Account');
/* eslint-enable */

// TODO Feature: Update Account Settings
// TODO Feature: Confirm E-mail

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

const Find = async () => {
  try {
    const result = await Account.find({}).select('name username email').limit(50).exec();
    // console.log(result);
    return { success: true, result };
  } catch (error) {
    return { success: false, error };
  }
};

const Update = async (options = {}) => {
  const { email, values } = options;
  try {
    const account = await Account.updateOne({ email }, values);

    // console.log(result);
    return { success: true, id: account.id };
  } catch (error) {
    return { success: false, error };
  }
};

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
  Find,
  Update,
  RemoveAll
};
