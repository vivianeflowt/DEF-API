// @
const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

// const Authorization = require('../middlewares/Authorization');
// @ Controller

const Post = require('@models/Post');

const debug = async (req, res) => {
  //
  const { method } = req;

  return res.status(200).json({
    message: 'debug',
    method
  });
};

const deleteDatabase = async (req, res) => {
  try {
    await mongoose.connection.db.dropDatabase();
    // throw new Error('aaa');
  } catch (error) {
    if (error) return res.status(400).send({ success: false, error });
  }
  return res.status(200).send({
    success: true
  });
};

// router.use(Authorization);
// @ ROUTES
// router.use(authorization);
router.get('/', debug);
router.post('/', debug);
router.post('/', debug);
router.put('/', debug);
router.patch('/', debug);
router.delete('/', deleteDatabase);

module.exports = router;
