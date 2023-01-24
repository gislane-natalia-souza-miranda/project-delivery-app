const Sale = require('./Sale');
const Product = require('./Products');

module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {
    saleId: {
      type: DataTypes.INTEGER,
      references: {
        model: Sale,
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      primaryKey: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      references: {
        model: Product,
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    underscored: true,
    timestamps: false,
    tableName: 'sales_products'
  });
  
  SaleProduct.associate = ({ Sale, Product }) => {
    Product.belongsToMany(Sale, {
      foreignKey: 'saleId',
      otherKey: 'productId',
      as: 'sales',
      through: SaleProduct,
    });
    Sale.belongsToMany(Product, {
      foreignKey: 'productId',
      otherKey: 'saleId',
      as: 'products',
      through: SaleProduct,
    });
  }
  
  return SaleProduct;
}