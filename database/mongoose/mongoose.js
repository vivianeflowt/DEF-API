/* eslint-disable */
'use strict';
/* eslint-enable */

/* eslint-disable */
const logger = require('@logger');
const config = require('@config');
/* eslint-enable */

// @ MONGODB LOADER
const { uri } = config.database.mongo;

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

module.exports.connect = async () => {
  await mongoose
    .connect(uri)
    .then(() => {
      logger.log('app', 'Mongoose Connected...');
    })
    .catch((error) => {
      logger.log('error', error);
      console.log(error);
      process.exit(1);
    });

  mongoose.connection.on('error', (error) => {
    logger.log('error', error);
    console.log(error);
    process.exit(1);
  });
};

module.exports.db = mongoose.connection;
