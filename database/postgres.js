/* eslint-disable */
const logger = require('@logger');
const config = require('@config');
/* eslint-enable */

// @ MONGODB LOADER
const Sequelize = require('sequelize');

// const getUri = () => {
//   const {
//     host, port, user, password, database
//   } = config.database.postgres;
//   return `postgres://${user}:${password}@${host}:${port}/${database}`;
// };
module.exports.connect = async () => {
  const { uri } = config.database.postgres;
  const sequelize = new Sequelize(uri, { logging: false });
  // console.log(uri);

  await sequelize
    .authenticate()
    .then(() => {
      logger.log('app', 'Postgres Connected...');
    })
    .catch((error) => {
      logger.log('error', error);
      console.log(error);
      process.exit(1);
    });
};

// module.exports.db = sequelize.
