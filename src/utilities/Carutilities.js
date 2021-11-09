const {Vehicle} = require('../models/index');

exports.UpdateCarName = async(id, name)=>{
let carupdated = await Vehicle.update({name: name}, { where: { id } });
return carupdated;
}
exports.RemoveCarById = async (id)=>{
let car = await Vehicle.destroy({ where: { id } });
return car;

}