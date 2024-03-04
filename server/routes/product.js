// Route handler for adding a product
import express from 'express';
import Product from '../models/Product';

const router = express.Router();

router.post('/addproduct', async(req, res) => {
    try {
        const { id, title, image, category, price } = req.body;
        const product = new Product({
            id,
            title,
            image, // Assuming image is a URL
            category,
            price,
        });
        await product.save();
        console.log("Saved product data");
        res.json({
            success: true,
            title: req.body.title
        });
    } catch (error) {
        console.error("Error saving product data:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});

export default router;