require('dotenv').config();

module.exports = {
  enviroment: {
    nodeenv: process.env.NODE_ENV || '',
  },
  application: {
    name: process.env.APP_NAME || 'APP',
  },
  server: {
    host: process.env.SERVER_HOST || 'localhost',
    port: process.env.SERVER_PORT || 3000,
  },
  database: {
    mongouri: process.env.MONGODB_URI || 'mongodb://localhost:27017/test',
    mongo: {
      host: process.env.MONGO_HOST || '',
      port: process.env.MONGO_PORT || '',
      user: process.env.MONGO_USER || '',
      password: process.env.MONGO_PASSWORD || '',
      database: process.env.MONGO_DATABASE || '',
    },
    mysql: {
      host: process.env.MYSQL_HOST || '',
      port: process.env.MYSQL_PORT || '',
      user: process.env.MYSQL_USER || '',
      password: process.env.MYSQL_PASSWORD || '',
      database: process.env.MYSQL_DATABASE || '',
    },
    postgres: {
      host: process.env.POSTGRES_HOST || '',
      port: process.env.POSTGRES_PORT || '',
      user: process.env.POSTGRES_USER || '',
      password: process.env.POSTGRES_PASSWORD || '',
      database: process.env.POSTGRES_DATABASE || '',
    },
  },
  security: {
    secret1: process.env.SECRET1 || '',
    secret2: process.env.SECRET2 || '',
  },
};
