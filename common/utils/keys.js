const fs = require('fs');
const crypto = require('crypto');

const DEF_PATH_KEYS = `${process.cwd()}/common/security/`;

const getPublicKey = () => {
  const key = fs.readFileSync(`${DEF_PATH_KEYS}public.key`);
  return key.toString().trim().split(' ').join('');
};

const getPrivateKey = () => {
  const key = fs.readFileSync(`${DEF_PATH_KEYS}private.key`);
  return key.toString().trim().split(' ').join('');
};

const generatePublicKey = () => {
  const key = crypto.randomBytes(64).toString('hex').toString().trim();
  try {
    fs.writeFileSync(`${DEF_PATH_KEYS}public.key`, key);
    return key;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const generatePrivateKey = () => {
  const key = crypto.randomBytes(64).toString('hex').toString().trim();
  try {
    fs.writeFileSync(`${DEF_PATH_KEYS}private.key`, key);
    return key;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const clearKeys = () => {
  try {
    fs.writeFileSync(`${DEF_PATH_KEYS}public.key`, '');
    fs.writeFileSync(`${DEF_PATH_KEYS}private.key`, '');
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = {
  getPublicKey,
  getPrivateKey,
  generatePublicKey,
  generatePrivateKey,
  clearKeys
};
