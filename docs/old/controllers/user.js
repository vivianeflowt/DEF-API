const uid = require('uid');
const User = require('../models/User').UserModel;
const userValidation = require('../helpers/userValidation');
const subscriptionCode = require('../helpers/subscriptionCode');

exports.create = async (req, res) => {
  const result = req.body;
  if (!result) {
    return res.status(400).send({ success: false, error: 'invalid data' });
  }
  const user_uid = uid(32).trim().toUpperCase();
  const user = new User({
    uid: user_uid,
    username: req.body.username || '',
    email: req.body.email || '',
    password: req.body.password || '',
    fistname: req.body.fistname || '',
    lastname: req.body.lastname || '',
    subscription: { code: subscriptionCode(user_uid) },
  });
  await user.save((err, doc) => {
    if (err) return res.status(400).send({ success: false, error: err });
    userValidation(doc.email, doc.uid);
    return res.status(200).send({
      success: true,
      uid: doc.uid,
    });
  });
};
exports.find = async (req, res) => {
  if (err) return res.status(400).send({ success: false, error: err });
  return res.status(200).send({
    success: true,
    message: 'find',
  });
};
exports.findOne = async (req, res) => {
  if (err) return res.status(400).send({ success: false, error: err });
  return res.status(200).send({
    success: true,
    message: 'findOne',
  });
};
exports.findById = async (req, res) => {
  if (err) return res.status(400).send({ success: false, error: err });
  return res.status(200).send({
    success: true,
    message: 'findById',
  });
};
exports.update = async (req, res) => {
  if (err) return res.status(400).send({ success: false, error: err });
  return res.status(200).send({
    success: true,
    message: 'update',
  });
};
exports.delete = async (req, res) => {
  if (err) return res.status(400).send({ success: false, error: err });
  return res.status(200).send({
    success: true,
    message: 'delete',
  });
};

exports.drop = async function (req, res) {
  User.remove({}, (err) => {
    if (err) return res.status(400).send({ success: false, error: err });
    console.log('collection removed');
    return res.status(200).send({
      success: true,
    });
  });
};
