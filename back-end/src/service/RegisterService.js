const md5 = require('md5');
const { User } = require('../database/models');

async function signUp(data) {
  const password = md5(data.password);

  const user = await User.create({ ...data, password, role: 'customer' });

  return user;
}

module.exports = { signUp };