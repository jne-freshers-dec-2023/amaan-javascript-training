
// Import necessary modules
const path = require('path');
const express = require('express');

const productController = require('../controllers/products');
const shopController = require('../controllers/shop');

// Create an Express Router
const router = express.Router();

router.get('/', shopController.getProducts);


// Export the router for use in other files
module.exports = router;

