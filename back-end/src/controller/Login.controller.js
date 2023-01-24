const LoginService = require("../service/Login.service");


const login = async (req, res) => {
  const user = await LoginService.validatelogin(req.body)

  res.status(200).json(user)
}

module.exports = {
  login,
};