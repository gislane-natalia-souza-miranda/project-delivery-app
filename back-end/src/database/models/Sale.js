const User = require('./User');
module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false
    },
    sellerId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false
    },
    totalPrice: {
      type: DataTypes.DECIMAL(9, 2),
      allowNull: false
    },
    deliveryAddress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    deliveryNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    saleDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'sales'
  });
  Sale.associate = ({ User }) => {
    Sale.belongsTo(User, {
        foreignKey: 'userId',
        as: 'user',
    });
    Sale.belongsTo(User, {
      foreignKey: 'sellerd',
      as: 'seller',
    })
  }
  return Sale;
}