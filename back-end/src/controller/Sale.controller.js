const SaleService = require('../service/Sale.service');

const insertSale = async (req, res) => {
  const inserted = await SaleService.insertSale(req.body);

  res.status(201).json(inserted);
};

module.exports = { insertSale };
