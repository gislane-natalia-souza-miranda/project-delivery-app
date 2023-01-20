const Sequelize = require('sequelize');
const User = require('./user');

const db = require('./index');

const Sale = db.define('Sales', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    allowNull: false
  },
  sellerId: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    allowNull: false
  },
  totalPrice: {
    type: Sequelize.DECIMAL(9, 2),
    allowNull: false
  },
  deliveryAddress: {
    type: Sequelize.STRING,
    allowNull: false
  },
  deliveryNumber: {
    type: Sequelize.STRING,
    allowNull: false
  },
  saleDate: {
    type: Sequelize.DATE,
    allowNull: false
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  timestamps: false,
  underscored: true,
  tableName: 'sales'
});

Sale.hasMany(SaleProduct, {
  foreignKey: 'sale_id',
  as: 'sales_products'
});

module.exports = Sale;
