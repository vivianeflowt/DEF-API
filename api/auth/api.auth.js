/* eslint-disable */
const config = require('@config');
// const logger = require('@logger');
/* eslint-enable */

// @
const express = require('express');

const router = express.Router();

const AuthorizationService = require('../../services/Authorization.Service');

const { prefix } = config.security;

const headerToken = `${prefix}-access-token`;

// @ Controller

const login = async (req, res) => {
  const { username, email, password } = req.body;
  const result = await AuthorizationService.SignIn({ username, email, password });

  if (result.success) {
    res.append(headerToken, result.token);
    return res.status(200).json({ success: result.success, token: result.token });
  }
  return res.status(406).json(result);
};

// @ ROUTES
// router.use(authorization);
// router.get('/', find);
// router.get('/:id', findById);
router.post('/login', login);
router.post('/signin', login);
router.post('/', login);
// router.put('/', update);
// router.patch('/', update);
// router.delete('/', removeAll);

module.exports = router;
