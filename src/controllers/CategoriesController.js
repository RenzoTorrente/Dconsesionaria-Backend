const {PropertyCategory} = require('../models/index');
exports.GetAllCategories = async (req, res, next)=>{
try{
let categories = await PropertyCategory.findAll({attributes:['id','name', 'icon']});
res.json({categories});
}catch(err){
next(err);
}
}
