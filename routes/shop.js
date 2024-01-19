
// Import necessary modules
const path = require('path');
const express = require('express');

const productController = require('../controllers/products');

// Create an Express Router
const router = express.Router();

router.get('/', shopController.getIndex);
// GET request to /products 
router.get('/products', shopController.index);


// Export the router for use in other files
module.exports = router;

