const { Sale, SaleProduct, User, Product } = require('../database/models');
const HttpException = require('../utils/httpExecption');

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
    raw: true,
  });

  if (sale) {
    const prod = await SaleProduct.findAll({
      where: {
          saleId: id
      },
      include: Product,
      raw: true,
    });
  
    const prodObj = prod.map((item) => {
      const obj = {
        id: item.productId,
        name: item['Product.name'],
        price: item['Product.price'],
        quantity: item.quantity
      };
      return obj;
    });
  
    const result = {...sale, sellerName: sale['seller.name'], products: [...prodObj]};
  
    return result;
  }

  throw new HttpException(404, 'Pedido não encontrado');
};

module.exports = { insertSale, getById };