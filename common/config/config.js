require('dotenv').config();

const application = require('./application.config');
const server = require('./server.config');
const database = require('./database.config');
const enviroment = require('./enviroment.config');
const security = require('./security.config');

module.exports = {
  application,
  server,
  database,
  enviroment,
  security
};
