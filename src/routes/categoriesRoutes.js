const express = require('express');
const { GetAllCategories } = require('../controllers/CategoriesController');
const router = express.Router();

//GET ALL CATEGORIES
router.get('/', GetAllCategories);;

module.exports = router;