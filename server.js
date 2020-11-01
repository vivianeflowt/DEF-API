// #!/usr/bin/env node

//  if (!global.logger){ global.logger = require('my_logger'); }
// @ GLOBAL MODULES
/* global */
Object.assign(global, { config: require('./common/config/config') });
// Object.assign(global, { express: require('express') });
Object.assign(global, { logger: require('./common/log/logger') });

// @ SERVER
const { logger, config } = global;

const fs = require('fs');
const loader = require('./loaders');
// const keys = require('./utils/keys');

console.clear();

// setTimeout(() => {
//   console.log('');
//   devlogger.keys('PUBLIC  ' + fs.readFileSync('./security/public.key'));
//   devlogger.keys('PRIVATE ' + fs.readFileSync('./security/private.key'));
// }, 5000);

// const startConsoleClear = () => {
//   setInterval(() => {
//     devlogger.clear();
//     devlogger.report('Server Running...');
//   }, 50000);
// };

async function start() {
  try {
    logger.log('app', 'Loading Server...');
    // #
    await loader.express.load();
    await loader.mongoose.load();
    // #
  } catch (error) {
    if (error) {
      logger.log('error', error);
      process.exit(1);
    }
  } finally {
    logger.log('app', `Listen: http://${config.server.host}:${config.server.port}`);
    // startConsoleClear();
    // testLogger();
    // testLogger2();
  }
}

start();

const testLogger = () => {
  setInterval(() => {
    // for (let index = 0; index < Math.floor(Math.random() * 11 * 5); index++) {
    //   setTimeout(() => {
    //     logger.log('data', 'http');
    //   }, Math.floor(Math.random() * 11 * 10));
    // }
    // for (let index = 0; index < Math.floor(Math.random() * 11 * 5); index++) {
    //   setTimeout(() => {
    //     logger.log('data', 'http');
    //   }, Math.floor(Math.random() * 11));
    // }
    setTimeout(() => {
      logger.log('info', 'Viviane');
    }, Math.floor(Math.random() * 11 * 100));
    setTimeout(() => {
      logger.log('warn', 'Viviane');
    }, Math.floor(Math.random() * 11 * 300));
    setTimeout(() => {
      logger.log('error', 'Viviane');
    }, Math.floor(Math.random() * 11 * 20000));
    setTimeout(() => {
      logger.log('info', 'tick');
    }, 10000);
  }, 1000);
};

const testLogger2 = () => {
  setInterval(() => {
    console.log('');
    logger.log('error', 'Viviane');
    logger.log('debug', 'Viviane');
    logger.log('warn', 'Viviane');
    logger.log('data', 'Viviane');
    logger.log('info', 'Viviane');
    logger.log('verbose', 'Viviane');
    logger.log('app', 'Viviane');
    logger.log('api', 'Viviane');
    logger.log('http', 'Viviane');
    console.log('');
  }, 2000);
};
