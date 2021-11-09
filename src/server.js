
const express = require('express');
require('dotenv').config()
const app = express();
const cors = require('cors');
const routerMain = require('./routes/main');
const {sequelize} = require('./models/index');
const {errors} = require('./middlewares/error');
//SETINGS
const PORT = process.env.PORT || 3004;
//MIDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
//ROUTE 
routerMain(app);
app.use(errors);
//SERVER
app.listen(PORT, ()=>{
console.log('server listening on port: ', PORT);
sequelize.authenticate().then(async ()=>{
console.log('db is connect')
await sequelize.sync({ force: false });
})
})