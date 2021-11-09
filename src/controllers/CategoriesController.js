const {PropertyCategory} = require('../models/index');
exports.GetAllCategories = async (req, res, next)=>{
try{
let categories = await PropertyCategory.findAll();
res.json({categories});
}catch(err){
next(err);
}
}
