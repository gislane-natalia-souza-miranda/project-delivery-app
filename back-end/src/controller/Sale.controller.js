const SaleService = require('../service/Sale.service');

const insertSale = async (req, res) => {
  const inserted = await SaleService.insertSale(req.body);

  res.status(201).json(inserted);
};

const getAll = async (_req, res) => {
  const sales = await SaleService.getAll();
  
  res.status(200).json(sales);
};

module.exports = { insertSale, getAll };
