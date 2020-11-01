const { logger, config } = global;

// @ SEQUELIZE LOADER
const Sequelize = require('sequelize');

const {
  host, port, database, user, password
} = config.database.postgres;

module.exports.load = async () => {
  const sequelize = new Sequelize({
    dialect: 'postgres',
    host,
    port,
    user,
    password,
    database
  });

  await sequelize
    .authenticate()
    .then(() => {
      logger.log('app', 'Postgres Load!');
    })
    .catch((error) => {
      logger.log('error', error);
      console.log(error);
      process.exit(1);
    });
};
