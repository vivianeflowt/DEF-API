const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const bcrypt = require('bcrypt');
const uniqueValidator = require('mongoose-unique-validator');

require('mongoose-type-email');

mongoose.SchemaTypes.Email.defaults.message = 'Email address is invalid';

const SALT_WORK_FACTOR = 10;

const AccountSchema = new Schema({
  username: {
    type: String,
    index: true,
    // select: true,
    // unique: true,
    immutable: true,
    required: [true, 'username required'],
    maxlength: [80, 'username too long']
  },
  email: {
    type: mongoose.SchemaTypes.Email,
    index: true,
    trim: true,
    lowercase: true,
    // unique: true,
    // select: true,
    required: [true, 'email required'],
    maxlength: [140, 'email too long']
  },
  password: {
    type: String,
    trim: true,
    required: [true, 'password required']
  },
  active: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updateAt: {
    type: Date,
    default: Date.now
  }
});

AccountSchema.plugin(uniqueValidator);

AccountSchema.pre('save', async function save(next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

AccountSchema.pre('save', async function save(next) {
  try {
    this.updateAt = Date.now();
    return next();
  } catch (err) {
    return next(err);
  }
});

const AccountModel = mongoose.model('Account', AccountSchema);

module.exports = AccountModel;
