const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const bcrypt = require('bcrypt');
const uniqueValidator = require('mongoose-unique-validator');
// const { secret2 } = require('../../common/constants/config').security.secret2;

const AccountSchema = new Schema({
  username: {
    type: String,
    index: true,
    select: true,
    unique: true,
    immutable: true,
    required: [true, 'username required'],
    maxlength: [80, 'username too long']
  },
  email: {
    type: String,
    index: true,
    trim: true,
    lowercase: true,
    unique: true,
    select: true,
    required: [true, 'email required'],
    maxlength: [120, 'email too long']
  },
  password: {
    type: String,
    trim: true,
    required: [true, 'password required']
  },
  active: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

AccountSchema.plugin(uniqueValidator);

// Password Hash
AccountSchema.pre('save', async (next) => {
  const account = this;
  if (!account.isModified('password')) return next();
  const hash = bcrypt.hashSync(account.password, bcrypt.genSaltSync(8), null);
  account.password = hash;
  return next();
});

// Password Check
// AccountSchema.methods.validatePassword = function (data) {
//   return bcrypt.compareSync(data, this.password);
// };

const AccountModel = mongoose.model('Account', AccountSchema);

module.exports = AccountModel;
