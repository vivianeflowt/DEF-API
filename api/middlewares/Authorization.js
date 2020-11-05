// const logger = require('../../common/log/logger');
const config = require('../../common/config/config');

const { prefix } = config.security;

const headerToken = `${prefix}-access-token`;

const AuthorizationService = require('../../services/Authorization.Service');

module.exports = async (req, res, next) => {
  const accessToken = req.headers[headerToken];
  const result = await AuthorizationService.Verify({ accessToken });

  if (!result.authorization) {
    return res
      .status(400)
      .send({ authorization: result.authorization, message: 'Failed to authenticate token.' });
  }
  res.append(headerToken, result.token);

  next();
};
