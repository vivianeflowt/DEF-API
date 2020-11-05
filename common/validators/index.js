/* eslint-disable */
'use strict';
/* eslint-enable */

// const validator = require('validator');
const validatorjs = require('validate.js');

// #
const isEmpty = (value) => validatorjs.isEmpty(value);
const isDefined = (value) => validatorjs.isDefined(value);
// #
const isString = (value) => validatorjs.isString(value);
const isInteger = (value) => validatorjs.isInteger(value);
const isNumber = (value) => validatorjs.isNumber(value);
const isDate = (value) => validatorjs.isDate(value);
const isBoolean = (value) => validatorjs.isBoolean(value);
const isArray = (value) => validatorjs.isArray(value);
const isObject = (value) => validatorjs.isObject(value);
const isFunction = (value) => validatorjs.isFunction(value);
const isHash = (value) => validatorjs.isHash(value);
const isPromise = (value) => validatorjs.isPromise(value);
// #

module.exports = {
  isEmpty,
  isDefined,
  isString,
  isInteger,
  isNumber,
  isDate,
  isBoolean,
  isArray,
  isObject,
  isFunction,
  isHash,
  isPromise
};
