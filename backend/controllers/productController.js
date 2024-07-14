// controllers/ProductController.js


// require to deleted images as weell
const fs = require('fs');
const path = require('path');

// ----------------------

const Product = require('../models/Product');
const multer = require('multer');

// Multer configuration for file uploads
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, '../frontend/public/productimg/'); // Destination folder for uploaded images
    },
    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now()
        cb(null, uniqueSuffix + '-' + file.originalname); // Unique filename for each uploaded file
    }
});

const upload = multer({ storage: storage });

// Controller functions

// Create a new work item
const createProduct = async (req, res) => {
    try {
        const { name, description, regularPrice, discountPrice, productType, brand, stock, rating } = req.body;
        const image = req.file.filename; // Get the filename of the uploaded image

        const productItem = new Product({
            image,  name, description, regularPrice, discountPrice, productType, brand, stock, rating
        });

        const createdProduct = await productItem.save();
        res.status(201).json(createdProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all work items
const getAllProducts = async (req, res) => {
    try {
        const allItems = await Product.find();
        res.json(allItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a specific work item by ID
const getProductsById = async (req, res) => {
    const id = req.params.id;

    try {
        const productItem = await Product.findById(id)
;

        if (!productItem) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json(productItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a work item by ID
const updateProductById = async (req, res) => {
    const { id } = req.params;
    const { name, description, regularPrice, discountPrice, productType, brand, stock, rating } = req.body;
    let updateFields = { name, description, regularPrice, discountPrice, productType, brand, stock, rating };

    if (req.file) {
        updateFields.image = req.file.filename; // Update image if a new one is uploaded
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, updateFields, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Work item not found' });
        }

        res.json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteProductById = async (req, res) => {
    const id = req.params.id;

    try {
        const productItem = await Product.findById(id)
;

        if (!productItem) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Construct the image path
        const imagePath = path.join(__dirname, '..', '..', 'frontend', 'public', 'productimg', productItem.image);

        // Delete the work entry
        await Product.findByIdAndDelete(id)
;

        // Delete the image file
        fs.unlink(imagePath, (err) => {
            if (err) {
                console.error('Error deleting image:', err);
                return res.status(500).json({ message: 'Failed to delete the image' });
            }

            res.json({ message: 'Item and image deleted successfully' });
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createProduct, getAllProducts, getProductsById, updateProductById, deleteProductById, upload
};