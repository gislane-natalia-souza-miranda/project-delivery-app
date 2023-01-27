const UserService = require('../service/User.service');

const getSellers = async (_req, res) => {
  const sellers = await UserService.getSeller();
  res.status(200).json(sellers);
};

module.exports = { getSellers };