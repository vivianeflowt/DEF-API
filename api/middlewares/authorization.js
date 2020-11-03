const jwtwebtoken = require('jsonwebtoken');

const { config } = global;

const Authorization = async (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) {
    return res.status(401).send({ auth: false, message: 'No token provided.' });
  }

  jwtwebtoken.verify(token, config.security.key.private, (error, decoded) => {
    if (error) {
      return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    }
    // se tudo estiver ok, salva no request para uso posterior
    req.accountId = decoded.id;
    next();
  });
};

module.exports = {
  Authorization
};
