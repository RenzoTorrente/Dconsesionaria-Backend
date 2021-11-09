const express = require('express');
const {body} = require("express-validator");
const { GetAllCars, GetCarById, UpdateCar, RemoveCar, CreateCar } = require('../controllers/CarControllers');
const { validatorString } = require('../middlewares/validatorString');
const router = express.Router();
//GET ALL CAR
router.get('/', GetAllCars);
//GET CAR BY ID
router.get('/:id', GetCarById);
//CREATE CAR
router.post('/',validatorString,CreateCar);
//UPDATE 
router.put('/:id',validatorString, UpdateCar);
//DELETE
router.delete('/:id', RemoveCar);   

module.exports = router;





