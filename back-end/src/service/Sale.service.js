const { Sale, SaleProduct, User } = require('../database/models');

const insertSale = async (saleParam) => {
  const { products, ...sale } = saleParam;

  const inserted = await Sale.create(sale);

  console.log(inserted);

  const arr = products.map(({ id, quantity }) => (
    { saleId: inserted.id, productId: id, quantity }));

  await SaleProduct.bulkCreate(arr);

  return inserted;
};

const getById = async (id) => {
  const sale = await Sale.findByPk(id, {
    include: [{
      model: User,
      as: 'seller',
      attributes: ['name'],
    }],
  });

  console.log(sale);

  return sale;
};

module.exports = { insertSale, getById };