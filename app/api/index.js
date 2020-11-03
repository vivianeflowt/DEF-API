// @
const express = require('express');

const router = express.Router();

const AccountRouter = require('./account/api.account');
const AuthRouter = require('./auth/api.auth');

router.use('/account', AccountRouter);
router.use('/auth', AuthRouter);

module.exports = router;
