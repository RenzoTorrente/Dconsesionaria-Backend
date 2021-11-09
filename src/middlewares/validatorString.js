const {check} = require('express-validator');
const { validatorResults } = require('../helpers/validatorsResults');
const validatorString = [check('name').exists().not().isEmpty(),
(req, res, next)=>{
validatorResults(req, res, next);
}
]

module.exports = {validatorString}; 
