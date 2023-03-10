module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING,
    }
  }, {
    timestamps: false,
    tableName: 'users',
    underscored: true,
  });

  User.associate = ({ User, Sale }) => {
    User.hasMany(Sale, {
      foreignKey: 'userId',
      as: 'user',
    })
  }

  User.associate = ({ User, Sale }) => {
    User.hasMany(Sale, {
      foreignKey: 'sellerId',
      as: 'seller',
    })
  }

  return User;
}