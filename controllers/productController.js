const Product = require("../models/Products");
const path = require("path");
const multer = require("multer");

// Setup multer storage 
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); 
    }
});

const upload = multer({ storage: storage });

const createProduct = async (req, res) => {
    const { name, price, description } = req.body;

    if (!name || !price || !description) {
        return res.status(400).json({ message: "Please enter the required fields: name, price, description" });
    }

    try {

        const image = req.file ? req.file.filename : undefined;

        const newProduct = new Product({
            name,
            price,
            image,
            description
        });

        await newProduct.save();

        res.status(201).json({ message: "Product created successfully", newProduct });
    } catch (error) {
        res.status(400).json({ error: "Error creating product", details: error.message });
    }
};


module.exports = { createProduct: [upload.single('image'), createProduct] };
