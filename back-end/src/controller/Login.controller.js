const LoginService = require('../service/Login.service');
const { createToken } = require('../middlewares/token');

const login = async (req, res) => {
  const user = await LoginService.validatelogin(req.body);
  const token = createToken(user);
  
  return res.status(200).json({ ...user, token });
};

module.exports = {
  login,
};