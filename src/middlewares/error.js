const { error } = require("../responses/reponses");

exports.errors = function (err, req, res, next){

const message = err.message || 'error interno';
const status = err.statusCode || 500 ;
 error(req, res, status, message);
}