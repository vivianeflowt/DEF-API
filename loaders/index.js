const expressLoader = require('./express.loader');
const mongooseLoader = require('./mongoose.loader');

module.exports = {
  express: expressLoader,
  mongoose: mongooseLoader,
};
