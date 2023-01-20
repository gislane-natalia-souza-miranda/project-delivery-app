const Sequelize = require('sequelize');

const db = require('./index');

const Product = db.define('Products', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  price: {
    type: Sequelize.DECIMAL(4, 2),
    allowNull: false
  },
  urlImage: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: ''
  }
}, {
  timestamps: false,
  underscored: true,
  tableName: 'products'
});

Product.hasMany(SaleProduct, {
  foreignKey: 'product_id',
  as: 'sales_products'
});

module.exports = Product;
