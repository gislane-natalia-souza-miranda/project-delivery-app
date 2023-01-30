const { Sale } = require('../database/models');
const HttpException = require('../utils/httpExecption');

const getSalesById = async (id) => {
  const sales = await Sale.findAll({
    where: { sellerId: id },
  });

  if (!sales) throw new HttpException(404, 'sales not found');

  return sales;
};

module.exports = {
  getSalesById,
};
