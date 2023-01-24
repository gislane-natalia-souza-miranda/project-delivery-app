const { User } = require('../database/models');
const md5 = require('md5');

class RegisterService {
  signUp = async (data) => {
    const password = md5(data.password);

    const user = await User.create({...data, password, role: 'customer'});

    return user;
  }
}

module.exports = RegisterService;