const { logger, config } = global;

// @ SEQUELIZE LOADER
const Sequelize = require('sequelize');

// const {
//   host, port, database, user, password
// } = config.database.postgres;

module.exports.load = async () => {
  // console.log(host, port, database, user, password);
  const sequelize = new Sequelize({
    dialect: 'postgres',
    host: config.database.postgres.host,
    port: config.database.postgres.port,
    user: config.database.postgres.user,
    password: config.database.postgres.password,
    database: config.database.postgres.database
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
