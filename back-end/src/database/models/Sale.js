const User = require('./User');
const moment = require('moment');
const date = moment().utc().format();


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
      defaultValue: sequelize.literal('NOW()'),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'Pendente',
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
      foreignKey: 'sellerId',
      as: 'seller',
    })
  }

  return Sale;
}
