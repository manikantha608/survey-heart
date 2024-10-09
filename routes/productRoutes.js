const express = require("express");
const path = require("path");
const productController = require("../controllers/productController");
const router = express.Router();


router.post("/products", productController.createProduct);


router.get('/uploads/:imageName', (req, res) => {
    const imageName = req.params.imageName;
    res.setHeader("Content-Type", "image/jpeg");

    const imagePath = path.join(__dirname, "..", "uploads", imageName);

    res.sendFile(imagePath, err => {
        if (err) {
            console.error("File not found:", err);
            res.status(404).json({ error: "Image not found" });
        }
    });
});

module.exports = router;
