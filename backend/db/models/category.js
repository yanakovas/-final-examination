'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate( { Item }) {
      Category.hasMany(Item, { foreignKey: 'category_id'})
    }
  }
  Category.init({
    name:{
      type: DataTypes.TEXT,
      allowNull: false,
    } ,
    img: {
      type: DataTypes.TEXT,
      allowNull: true,
    }  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};