// @
const express = require('express');

const router = express.Router();

const AccountRouter = require('./account');

router.use('/account', AccountRouter);

module.exports = router;
