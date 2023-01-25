const service = require('../service/Product.service');

const getAll = async (_req, res) => {
  const products = await service.getAll();

  res.status(200).json(products);
}

module.exports = { getAll };