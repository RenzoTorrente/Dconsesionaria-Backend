'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PropertyCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    PropertyCategory.hasMany(models.VehicleProperty,{foreignKey:'categoryId'});
    }
  };
  PropertyCategory.init({
    name:{
        type: DataTypes.STRING,
        allowNull:false
      },
    icon:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PropertyCategory',
  });
  return PropertyCategory;
};