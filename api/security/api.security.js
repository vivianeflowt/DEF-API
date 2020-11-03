// @
const express = require('express');

const router = express.Router();

const { Authorization } = require('../middlewares/authorization');

// @ Controller

const debug = async (req, res) => {
  //
  const { method } = req;

  return res.status(400).json({ message: 'security', method });
};

router.use(Authorization);
// @ ROUTES
// router.use(authorization);
router.get('/', debug);
router.post('/', debug);
router.post('/', debug);
router.put('/', debug);
router.patch('/', debug);
router.delete('/', debug);

module.exports = router;