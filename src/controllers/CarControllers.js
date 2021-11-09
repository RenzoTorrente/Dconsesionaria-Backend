const { error } = require('../helpers/CreateError');
const {Vehicle} = require('../models/index');
const { succes } = require('../responses/reponses');
const { UpdateCarName } = require('../utilities/Carutilities');

exports.GetAllCars = async (req, res, next)=>{
    try{
        let cars = await Vehicle.findAll({attributes:['id', 'name']});
        res.status(200).json({cars});
        }catch(err){
        next(err);
        }
}

exports.GetCarById = async(req, res, next)=>{
const id = req.params.id;
try {
let car = await Vehicle.findOne({where:{id:id}});
if(!car){
error('no se encontró el vehiculo que buscabas', 402);
}
res.status(200).json({car});
}catch(err){
next(err);
}

}
    
exports.UpdateCar = async (req, res, next) =>{
let id = req.params.id;
let {name} = req.body;
console.log(name);
try{
 let car = await UpdateCarName(id, name);
if(car[0]=== 0){
error('no se encuentró el vehiculo con ese id', 402);
}
res.status(200).json({message:'se actualizó correctamente'});
console.log(car);
}catch(err){
next(err);
}
}

exports.CreateCar = async (req, res, next)=>{
let {name} = req.body;
try{
await Vehicle.create({name});
res.status(200).json({message:'el vehiculo se creó correctamente'});
}catch(err){
next(err);
}
}
exports.RemoveCar = async (req, res, next)=>{
const {id} = req.params;
try{
 let caremoved = await Vehicle.destroy({ where: { id } });
 console.log(caremoved);
 if(!caremoved){
 error('el vehiculo a eliminar no existe', 404);
}
res.status(200).json({message:'se eliminó correctamente vehiculo seleccionado'});
}catch(err){
next(err);
}
}