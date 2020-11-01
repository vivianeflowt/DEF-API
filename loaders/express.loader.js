/* global express */

const { logger, config } = global;

// @ EXPRESS LOADER
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const compression = require('compression');
const helmet = require('helmet');
const application = require('../app');

module.exports.load = async () => {
  // import path from 'path'
  // import cookieParser from 'cookie-parser'
  // import rescue from 'express-rescue'

  const app = express();
  app.set(config.server.port);
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

  app.use(application);

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
    logger.log('app', 'Express Load!');
  });
};
