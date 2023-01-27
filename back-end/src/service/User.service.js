const { User } = require('../database/models');

const getSeller = async () => {
  const seller = await User.findAll({ where: { role: 'seller' } });

  return seller;
};

module.exports = { getSeller };