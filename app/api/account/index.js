// @
const express = require('express');

const router = express.Router();
const AccountService = require('../../../services/Account.Service');

// @ MIDDLEWARE
const authorization = async (req, res, next) => {
  try {
    console.log(' . account authorization middleware');
  } catch (error) {
    console.log(' . account authorization middleware');
    console.log(error);
  }
  next();
};

// @ Controller

// const Account = require('../../models/Account');

// @ Controller

const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const result = await AccountService.Create(username, email, password);
  if (result.success) {
    res.status(200).json(result);
  } else {
    res.status(406).json(result);
  }
};
const find = async (req, res) => {
  res.json({ message: 'Find Account' });
};
const update = async (req, res) => {
  res.json({ message: 'Update Account' });
};
const remove = async (req, res) => {
  res.json({ message: 'Remove Account' });
};

// @ ROUTES
router.use(authorization);
router.get('/', find);
router.post('/', signup);
router.put('/', update);
router.patch('/', update);
router.delete('/', remove);

module.exports = router;
