require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.testing' : '.env',
});

const express = require('express');
const rateLimit = require('express-rate-limit');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
// const debug = require('debug')('api:server');
// const http = require('http');
const mongoose = require('mongoose');
const helmet = require('helmet');
const config = require('config');
const errorHandler = require('./middlewares/errorHandler');
const verifyJWT = require('./middlewares/jwt');

const devlog = require('./helpers/devlog');

// const indexRouter = require('./routes/index')
// const listRouter = require('./routes/list')
// const geoRouter = require('./routes/geo')

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

const app = express();

const connectionString = config.get('development.database.mongodb');

mongoose.connect(connectionString, {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  connectTimeoutMS: 5000,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  devlog('MONGODB', 'connected');
});

// mongoose.connection.dropDatabase()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(limiter);
app.use(errorHandler);
//
app.use(require('./routes/index'));
app.use(require('./routes/list'));
app.use(require('./routes/geo'));
app.use(require('./routes/auth'));
app.use(require('./routes/user'));

// app.get('/error', function createError(req, res, next) {
//     var err = new Error('Sample error')
//     err.status = 500
//     next(err)
// })

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
