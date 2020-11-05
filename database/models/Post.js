/* eslint-disable */
'use strict';
/* eslint-enable */

const Sequelize = require('sequelize');

const { sequelize } = global;

const { Model } = Sequelize;

class Post extends Model {}
Post.init(
  {
    // attributes
    text: {
      type: Sequelize.STRING
    }
  },
  {
    sequelize,
    modelName: 'post'
    // options
  }
);

module.exports = Post;
