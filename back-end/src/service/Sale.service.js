const { Sale, SaleProduct } = require('../database/models');

const insertSale = async (saleParam) => {
  const { products, ...sale } = saleParam;

  const inserted = await Sale.create(sale);

  const arr = products.map(({ id, quantity }) => (
    { saleId: inserted.id, productId: id, quantity }));

  await SaleProduct.bulkCreate(arr);

  const test = await SaleProduct.findAll({ raw: true });

  console.log(test);

  return inserted;
};

module.exports = { insertSale };