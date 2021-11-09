'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VehicleProperty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      VehicleProperty.belongsTo(models.PropertyCategory,{foreignKey:'categoryId'});
      VehicleProperty.belongsToMany(models.Vehicle , { through: models.PropertyValue});
    }
  };
  VehicleProperty.init({
    name: {
      type: DataTypes.STRING,
      allowNull:false
    },
    categoryId:{
      type: DataTypes.INTEGER,
      allowNull:false,
    }
  }, {
    sequelize,
    modelName: 'VehicleProperty',
  });
  return VehicleProperty;
};