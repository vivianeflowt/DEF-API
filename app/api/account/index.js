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
  const result = await AccountService.Create({ username, email, password });
  if (result.success) {
    return res.status(200).json(result);
  }
  return res.status(406).json(result);
};

const removeAll = async (req, res) => {
  // res.json({ message: 'Remove Account' });
  const result = await AccountService.RemoveAll();
  if (result.success) {
    return res.status(200).json(result);
  }
  return res.status(406).json(result);
};

// @ ROUTES
router.use(authorization);
// router.get('/', find);
router.post('/', signup);
// router.put('/', update);
// router.patch('/', update);
router.delete('/', removeAll);

module.exports = router;
