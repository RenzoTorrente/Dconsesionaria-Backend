const express = require('express');
const propertiesRoutes = require('./propertiesRoutes');
const categoriesRoutes = require('./categoriesRoutes');
const carsRoutes = require('./carsRoutes');

function routerMain(app) {
    const router = express.Router();
    app.use('/api', router);
    router.use('/properties', propertiesRoutes);
    router.use('/categories', categoriesRoutes);
    router.use('/cars', carsRoutes);
  }


module.exports = routerMain;
