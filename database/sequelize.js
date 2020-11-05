/* eslint-disable */
'use strict';
/* eslint-enable */

/* eslint-disable */
const logger = require('@logger');
const config = require('@config');
/* eslint-enable */

const Sequelize = require('sequelize');
const PostModel = require('./sequelize/models/post.js');

const { uri } = config.database.mysql;

module.exports.connect = async () => {
  //const sequelize = new Sequelize(uri);
  const sequelize = new Sequelize(uri,{ logging: false }));

  //
  /* eslint-disable */
  const Post = PostModel(sequelize, Sequelize);
  /* eslint-enable */

  //
  sequelize
    .sync({ force: true })
    .then(() => {
      logger.log('app', 'Sequelize Connected...');
    })
    .catch((error) => {
      logger.log('error', error);
      console.log(error);
      process.exit(1);
    });
};
