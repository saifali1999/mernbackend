const express = require('express');
const router = express.Router();
const {  createProduct, getAllProducts, getProductsById, updateProductById, deleteProductById, upload} = require('../controllers/productController');


// Routes

// Create a new product 
router.post("/products", upload.single('image'), createProduct);

// Get all product items
router.get("/products", getAllProducts);

// Get a specific product item by ID
router.get("/products/:id", getProductsById);

// Update a product item by ID
router.put("/products/:id", upload.single('image'), updateProductById);

// Delete a product item by ID
router.delete("/products/:id", deleteProductById);

module.exports = router;