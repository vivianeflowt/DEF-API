// const jwtwebtoken = require('jsonwebtoken');

// const { config } = global;
const AuthorizationService = require('../../services/Authorization.Service');

module.exports = async (req, res, next) => {
  const token = req.headers['x-access-token'];
  const result = await AuthorizationService.Verify({ token });

  if (!result.authorization) {
    return res
      .status(400)
      .send({ authorization: result.authorization, message: 'Failed to authenticate token.' });
  }

  req.body.decoded = result.decoded;
  next();
};
