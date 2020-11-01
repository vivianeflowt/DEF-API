const expressLoader = require('./express.loader');
const mongooseLoader = require('./mongo.loader');
const postgresLoader = require('./postgres.load');

module.exports = {
  express: expressLoader,
  mongo: mongooseLoader,
  postgres: postgresLoader
};
