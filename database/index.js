const { logger, config } = global;

// @ MONGODB LOADER
const mongoose = require('mongoose');

const getUri = () => {
  // mongodb://localhost:27017/test
  const { host, port, database } = config.database.mongo;
  return `mongodb://${host}:${port}/${database}`;
};

module.exports.connect = async () => {
  const uri = getUri();
  mongoose.Promise = global.Promise;
  mongoose.set('useNewUrlParser', true);
  mongoose.set('useFindAndModify', false);
  mongoose.set('useCreateIndex', true);
  mongoose.set('useUnifiedTopology', true);

  await mongoose
    .connect(uri)
    .then(() => {
      logger.log('app', 'Database Connected...');
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
