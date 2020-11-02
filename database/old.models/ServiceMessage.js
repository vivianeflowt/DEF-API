// const mongoose = require('mongoose');
// const { Schema } = require('mongoose');
// // const bcrypt = require('bcrypt');
// const uniqueValidator = require('mongoose-unique-validator');
// // const { secret2 } = require('../../common/constants/config').security.secret2;

// const ServiceMessageSchema = new Schema({
//   service: {
//     type: String,
//     index: true,
//     uppercase: true,
//     immutable: true,
//     required: [true, 'service required']
//   },
//   type: {
//     type: String,
//     index: true,
//     uppercase: true,
//     immutable: true,
//     required: [true, 'service required']
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// ServiceMessageSchema.plugin(uniqueValidator);

// const ServiceMessageModel = mongoose.model('ServiceMessage', ServiceMessageSchema);

// module.exports = ServiceMessageModel;
