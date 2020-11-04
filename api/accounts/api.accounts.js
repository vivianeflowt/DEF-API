// @
const express = require('express');

const router = express.Router();
const AccountService = require('../../services/Account.Service');

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

const find = async (req, res) => {
  console.log(req.params);
  // res.json({ message: 'Remove Account' });
  const result = await AccountService.Find();
  if (result.success) {
    return res.status(200).json(result);
  }
  return res.status(406).json(result);
};

const update = async (req, res) => {
  const { email, values } = req.body;

  // res.json({ message: 'Remove Account' });
  const result = await AccountService.Update({ email, values });
  if (result.success) {
    return res.status(200).json(result);
  }
  return res.status(406).json(result);
};

// @ ROUTES
router.get('/', find);
// router.get('/:id', findById);
router.post('/', signup);
router.put('/', update);
router.patch('/', update);
router.delete('/', removeAll);

module.exports = router;
