require('dotenv').config();

module.exports = {
  development: {
    url: process.env.DATABASE_POSTGRES_URI,
    dialect: 'postgres',
    logging: false
  },
  test: {
    url: process.env.DATABASE_POSTGRES_URI,
    dialect: 'postgres',
    logging: false
  },
  production: {
    url: process.env.DATABASE_POSTGRES_URI,
    dialect: 'postgres',
    logging: false
  }
};
