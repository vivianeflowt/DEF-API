/* eslint-disable */
'use strict';
/* eslint-enable */

// @
const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const CredencialService = require('../../services/Credencial.Service');
// const Authorization = require('../middlewares/Authorization');
// @ Controller

/* eslint-disable */
const Post = require('@database').sequelize.model.Post;
/* eslint-enable */

const debug = async (req, res) => {
  //
  const { method } = req;

  return res.status(200).json({
    message: 'debug',
    method
  });
};

const debug2 = async (req, res) => {
  //
  const { method } = req;

  const result = await CredencialService.Register(req.body);

  console.log(result);

  return res.status(200).json({
    message: result,
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
router.post('/', debug2);
router.post('/', debug);
router.put('/', debug);
router.patch('/', debug);
router.delete('/', deleteDatabase);

module.exports = router;
