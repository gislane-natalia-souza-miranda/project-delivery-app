const SaleService = require('../service/Sale.service');

const getSalesById = async (req, res) => {
  const sales = await SaleService.getSalesById(req.params.id);
  
  return res.status(200).json(sales);
};

const insertSale = async (req, res) => {
  const inserted = await SaleService.insertSale(req.body);

  res.status(201).json(inserted);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const sale = await SaleService.getById(Number(id));

  return res.status(200).json(sale);
};

const getAll = async (_req, res) => {
  const sales = await SaleService.getAll();
  
  res.status(200).json(sales);
};

module.exports = { insertSale, getById, getAll, getSalesById };
