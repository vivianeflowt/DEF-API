// @

const express = require('express');

const router = express.Router();
const AccountsRouter = require('./accounts/api.accounts');
const AuthRouter = require('./auth/api.auth');
const SecurityRouter = require('./security/api.security');
const DebugRouter = require('./debug/api.debug');
const RequestSanitize = require('./middlewares/RequestSanitize');

// @ ROOT ROUTER
router.get('/', async (req, res) => {
  try {
    // console.log(` ${icon.arrow} ${req.method}, ${JSON.stringify(req.body)}`)
    return res.send({ method: req.method, content: req.body });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
});

router.use(RequestSanitize);
router.use('/api/accounts', AccountsRouter);
router.use('/api/auth', AuthRouter);
router.use('/api/security', SecurityRouter);
router.use('/api/debug', DebugRouter);
router.use('/debug', DebugRouter);

module.exports = router;
