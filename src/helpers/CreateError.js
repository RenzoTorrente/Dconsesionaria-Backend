exports.error = (msg, status)=>{
let err = new Error(msg);
err.statusCode = status;
throw err;
}

