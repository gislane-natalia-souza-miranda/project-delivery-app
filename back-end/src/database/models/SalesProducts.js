const Sequelize = require('sequelize');
const Sale = require('./sale');
const Product = require('./product');

const db = require('./index');

const SaleProduct = db.define('SalesProducts', {
  saleId: {
    type: Sequelize.INTEGER,
    references: {
      model: Sale,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    primaryKey: true,
  },
  productId: {
    type: Sequelize.INTEGER,
    references: {
      model: Product,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    primaryKey: true,
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, {
  underscored: true,
  timestamps: false,
  tableName: 'sales_products'
});

SaleProduct.belongsTo(Sale);
SaleProduct.belongsTo(Product);

module.exports = SaleProduct;
