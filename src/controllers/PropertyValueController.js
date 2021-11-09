const { error } = require('../helpers/CreateError');
const { UpdateValue, Propertiescarwv, AddValue } = require('../utilities/PropertyValueutilitie');

//UPDATE PROPERTIES CARS VALUES
exports.UpdatePropertyValue = async (req, res , next) =>{
let {carid , propertyid} = req.params;
const {score} = req.body;
try{
let updated =  await UpdateValue(score, parseInt(carid), parseInt(propertyid));
if(updated[0]=== 0){
error('el valor  a actualizar no se encontró', 402);
}
res.status(200).json({message:"se actualizó correctamente"});
}catch(err){
next(err);
}
    }
//PROPERTIES CARS WITH VALUES FOR SCORE SCREEN
exports.GetAllPropertiesCarWV = async (req, res, next)=>{
let {categoryid} = req.params;
const {vehicleId} = req.body;
try{
let properties = await Propertiescarwv(vehicleId, parseInt(categoryid));
console.log(properties);
res.status(200).json({properties});
}catch(err){
next(err);
}

}
exports.AddPropertyValue = async (req, res, next)=>{
let {carid , propertyid} = req.params;
try{
let propertievalue = await AddValue(parseInt(carid), parseInt(propertyid));
if(propertievalue[0]=== 0){
    error('el valor  a actualizar no se encontró', 402);
 }
 res.status(200).json({message:"se agregó correctamente la propiedad del vehiculo"});

}catch(err){
next(err);

}
}