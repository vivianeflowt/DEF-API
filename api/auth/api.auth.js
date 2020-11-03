// @
const express = require('express');

const router = express.Router();
const AuthorizationService = require('../../services/Authorization.Service');

// @ Controller

const login = async (req, res) => {
  const { username, email, password } = req.body;
  const result = await AuthorizationService.SignIn({ username, email, password });
  if (result.success) {
    return res.status(200).json(result);
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
