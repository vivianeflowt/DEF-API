// @
const AccountService = require('../../services/Account.Service');
// const Account = require('../../models/Account');

module.exports.signup = async (req, res) => {
  const { username, email, password } = req.body;
  const result = await AccountService.Create(username, email, password);
  if (result.success) {
    res.status(200).json(result);
  } else {
    res.status(406).json(result);
  }
};

module.exports.find = async (req, res) => {
  res.json({ message: 'Find Account' });
};

module.exports.update = async (req, res) => {
  res.json({ message: 'Update Account' });
};

module.exports.remove = async (req, res) => {
  res.json({ message: 'Remove Account' });
};
