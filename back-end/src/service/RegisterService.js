const md5 = require('md5');
const { User } = require('../database/models');

async function signUp(data) {
  const pass = md5(data.password);

  const user = await User.create({ ...data, password: pass, role: data.role || 'customer' });

  const { password, ...rest } = user.dataValues;

  return rest;
}

module.exports = { signUp };