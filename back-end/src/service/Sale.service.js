const { Sale, SaleProduct } = require('../database/models');

const insertSale = async (saleParam) => {
  const { products, ...sale } = saleParam;

  const inserted = await Sale.create(sale);

  const arr = products.map(({ id, quantity }) => (
    { saleId: inserted.id, productId: id, quantity }));

  await SaleProduct.bulkCreate(arr);

  return inserted;
};

const getAll = async () => {
  const sales = await Sale.findAll();
  console.log('service', sales);
  return sales;
};

module.exports = { insertSale, getAll };