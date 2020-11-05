/* eslint-disable */
'use strict';
/* eslint-enable */

// require('dotenv').config();

module.exports = {
  mongo: {
    uri: process.env.DATABASE_MONGO_URI || '',
    host: process.env.DATABASE_MONGO_HOST || '',
    port: process.env.DATABASE_MONGO_PORT || '',
    user: process.env.DATABASE_MONGO_USER || '',
    password: process.env.DATABASE_MONGO_PASSWORD || '',
    database: process.env.DATABASE_MONGO_DB || ''
  },
  postgres: {
    uri: process.env.DATABASE_POSTGRES_URI || '',
    host: process.env.DATABASE_POSTGRES_HOST || '',
    port: process.env.DATABASE_POSTGRES_PORT || '',
    user: process.env.DATABASE_POSTGRES_USER || '',
    password: process.env.DATABASE_POSTGRES_PASSWORD || '',
    database: process.env.DATABASE_POSTGRES_DB || ''
  },
  mysql: {
    uri: process.env.DATABASE_MYSQL_URI || '',
    host: process.env.DATABASE_MYSQL_HOST || '',
    port: process.env.DATABASE_MYSQL_PORT || '',
    user: process.env.DATABASE_MYSQL_USER || '',
    password: process.env.DATABASE_MYSQL_PASSWORD || '',
    database: process.env.DATABASE_MYSQL_DB || ''
  }
};
