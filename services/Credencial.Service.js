/* eslint-disable */
'use strict';
/* eslint-enable */

const Credencial = require('@mongoose/models/credencial');
const Role = require('@mongoose/models/role');

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

const Define = () => {
  try {
    const role = new Role({
      role: 'USER',
      description: 'Usuário padrão',
      privileges: {
        auth: {
          login: true,
          'change-password': true
        }
      }
    });
    role.save();
    return { success: true, values: role };
  } catch (error) {
    console.log(error);
    return { success: false, error };
  }
};

module.exports = {
  Register,
  Define
};
