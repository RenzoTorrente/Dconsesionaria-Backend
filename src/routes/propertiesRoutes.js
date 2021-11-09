const express = require('express');
const { CreateProperty, Deleteproperty, GetAllPropertiesOptions } = require('../controllers/PropertyControllers');
const { UpdatePropertyValue, GetAllPropertiesCarWV, AddPropertyValue } = require('../controllers/PropertyValueController');
const { validatorString } = require('../middlewares/validatorString');
const router = express.Router();


//GET all PROPERTIES
router.get('/alloptions/:vehicleid', GetAllPropertiesOptions);
//GET PROPERTIES CAR BY CATEGORY WITH VALUES 
router.get('/allforscore/:categoryid', GetAllPropertiesCarWV);
//UPDATE PROPERTY VALUE
router.put('/car/:carid/property/:propertyid', UpdatePropertyValue);
//Add Property Value
router.post('/car/:carid/property/:propertyid', AddPropertyValue);
//ADD PROPERTY
router.post('/:categoryid',validatorString, CreateProperty)
//DELETE PROPERTY
router.delete('/:id', Deleteproperty)

module.exports = router;

