const SaleService = require('../service/Sale.service');

const getSalesById = async (req, res) => {
  const sales = await SaleService.getSalesById(req.params.id);
  
  return res.status(200).json(sales);
};

module.exports = {
  getSalesById,
};