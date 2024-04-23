const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255)
    },
    category: {
      type: DataTypes.INTEGER,
      validate: {
        isIn: [[1, 2, 3, 4, 5]]
      }
    },
    price: {
      type: DataTypes.INTEGER
    },
    detail: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    pdstock: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    image: {
      type: DataTypes.STRING(255)
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  });

  return Product;
};