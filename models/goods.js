'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Goods extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Goods.init({
    goodsName: DataTypes.STRING,
    price: DataTypes.INTEGER,
    detail: DataTypes.TEXT,
    photo: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Goods',
  });
  return Goods;
};