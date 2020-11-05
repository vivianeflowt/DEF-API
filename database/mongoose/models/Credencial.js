/* eslint-disable */
'use strict';
/* eslint-enable */

const mongoose = require('mongoose');
const { Schema } = require('mongoose');
// const bcrypt = require('bcrypt');
// const uniqueValidator = require('mongoose-unique-validator');

const CredencialSchema = new Schema({
  context: {
    type: String,
    trim: true,
    uppercase: true,
    require: true
  },
  privileges: {
    type: Object,
    default: {}
  },
  description: {
    type: String,
    trim: true,
    uppercase: true,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// CredencialSchema.plugin(uniqueValidator);

const CredencialModel = mongoose.model('Credencial', CredencialSchema);

module.exports = CredencialModel;
