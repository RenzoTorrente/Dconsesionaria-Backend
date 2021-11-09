const {VehicleProperty, Vehicle} = require('../models/index');
const { Op,sequelize, Sequelize } = require("sequelize");

exports.createprop = async (idcategory, name)=>{
const prop = await VehicleProperty.create({categoryId:idcategory, name:name});
return prop;
}
exports.deleteprop = async (id)=>{
const propdeleted = await VehicleProperty.destroy({where:{id}});  
return propdeleted;
}
exports.getOptions = async (vehicleid)=>{
let properties = await VehicleProperty.findAll({
include: [{model:Vehicle, where: {id:{[Op.ne]:vehicleid}}}],
attributes:['id','name', 'categoryId'] });
 return properties;
}
exports.getAlloptions = async ()=>{
let subproperty = await VehicleProperty.findAll({ where:{
    id: {
          [Sequelize.Op.notIn]: Sequelize.literal(`(SELECT propertyvalues.vehiclepropertyid FROM propertyvalues)`)
    }
}, 
attributes:['id','name', 'categoryId']
}
)
return subproperty;

}