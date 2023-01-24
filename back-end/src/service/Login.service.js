const md5 = require('md5');
const { User } = require('../database/models');
const HttpException = require('../utils/httpExecption');

const validatelogin = async (user) => {
    const passCheck = md5(user.password);
    const userCheck = await User.findOne({
      where: { email: user.email },
      raw: true,
    });
    if (!userCheck) throw new HttpException(404, 'user not found');
    
    const { password, ...resto } = userCheck;
  
    if (passCheck === password) return resto;
  };

module.exports = {
  validatelogin,
};
