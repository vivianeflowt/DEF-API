// #!/usr/bin/env node
//

/* eslint-disable */
'use strict';
/* eslint-enable */
//
require('module-alias/register');
require('dotenv').config();
//
console.clear();
/* eslint-disable */
const logger = require('@logger');
const config = require('@config');
/* eslint-enable */

// @ EXPRESS LOADER
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const compression = require('compression');
const helmet = require('helmet');

const ApiRoutes = require('./api');

const database = require('./database/database');

const init = async () => {
  // import path from 'path'
  // import cookieParser from 'cookie-parser'
  // import rescue from 'express-rescue'
  logger.log('app', 'Start Server...');

  const app = express();
  // #
  app.set('host', process.env.SERVER_HOST);
  app.set('port', process.env.SERVER_PORT);
  app.set('env', process.env.NODE_ENV);
  app.set('x-powered-by', false);
  // #
  app.use(helmet());
  app.use(compression());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  // #
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  // #

  app.use(morgan(' - :method :url :status :res[content-length] - :response-time ms'));

  app.use(ApiRoutes);

  await database.mongoose.connect();
  await database.sequelize.connect();

  // # Catch All
  app.use((error, req, res, next) => {
    logger.log('error', error);
    res.status(error.status || 500);
    res.send({ error });
    next();
  });

  // #
  const server = http.createServer(app);
  server.listen(config.server.port);
  server.on('error', (error) => {
    logger.log('error', error);
    console.log(error);
    process.exit(1);
  });
  server.on('listening', () => {
    console.log('');
    logger.log('app', `Listen: http://${config.server.host}:${config.server.port}`);
  });
};

init();

// const testLogger = () => {
//   setInterval(() => {
//     console.log('');
//     logger.log('error', 'Viviane');
//     logger.log('debug', 'Viviane');
//     logger.log('warn', 'Viviane');
//     logger.log('data', 'Viviane');
//     logger.log('info', 'Viviane');
//     logger.log('verbose', 'Viviane');
//     logger.log('app', 'Viviane');
//     logger.log('api', 'Viviane');
//     logger.log('http', 'Viviane');
//     console.log('');
//   }, 2000);
// };

// setTimeout(() => {
//   console.log('');
//   // onsole.log(config.security.key.public);
//   // console.log(config.security.key.private);
//   console.log(config.database);
//   console.log('');
// }, 3000);
