const { validationResult} = require("express-validator")
const validatorResults = (req, res, next)=>{
try{
validationResult(req).throw() ;
return next(); // si no hay errores
}catch(err){
return res.status(400).json({ errors: err.array()}) 
}
}
module.exports = {validatorResults};
   