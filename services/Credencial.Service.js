/* eslint-disable */
'use strict';
/* eslint-enable */

const Credencial = require('@mongoose/models/credencial');

const Register = (options = {}) => {
  const { context, description, privileges } = options;
  console.log(options);
  try {
    const credencial = new Credencial({
      context: context || '',
      description: description || '',
      privileges: privileges || {}
    });
    credencial.save();
    return { success: true, id: credencial.id };
  } catch (error) {
    console.log(error);
    return { success: false, error };
  }
};

const purge = () => {
  //
};
module.exports = {
  Register
};
