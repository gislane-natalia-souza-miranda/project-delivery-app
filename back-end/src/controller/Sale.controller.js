const SaleService = require('../service/Sale.service');

const insertSale = async (req, res) => {
  const inserted = await SaleService.insertSale(req.body);

  res.status(201).json(inserted);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const sale = await SaleService.getById(Number(id));

  return res.status(200).json(sale);
};

module.exports = { insertSale, getById };
