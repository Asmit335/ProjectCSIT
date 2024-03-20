// Route handler for adding a product
import express from 'express';
import Product from '../models/Product.js';
// import bodyParser from 'body-parser';
// router.use(bodyParser.json());

const router = express.Router();

router.post('/addproduct', async(req, res) => {
    try {
        const { title, image, category, price } = req.body;

        console.log(req.body);

        const product = new Product({
            title,
            image, // Assuming image is a URL
            category,
            price,
        });
        await product.save();
        console.log('Saved product data');

        console.log(product);

        res.json({
            success: true,
            title: req.body.title,
            product,
        });
    } catch (error) {
        console.log(error);
        // console.error('Error saving product data:');
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
});


// for getting all entire producct when clicked

router.get('/getproduct', async(req, res) => {
    try {
        // Fetch all products from the database
        const products = await Product.find({});

        // Send the products as a response
        res.status(200).json(products);
        console.log("Product got and fetched.");
    } catch (error) {
        // If an error occurs during the database query, handle it
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



// creating api
// for deleting products by admin

router.post('/removeproduct', async(req, res) => {
    try {
        // Remove the product based on its title as a id(unique identifier)
        await Product.findOneAndDelete({ title: req.body.title });

        console.log('Product removed');

        // Respond with success
        res.json({
            success: true,
            message: 'Product removed successfully'
        });
    } catch (error) {
        // If an error occurs during deletion, handle it
        console.error('Error removing product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


// creating endpoint for featured product

router.get('/featured', async(req, res) => {
    let product = await Product.find({})
    let newProduct = product.slice(1).slice(-10)
    console.log("new featured product added");
    res.send(newProduct)
})

export { router as ProductRouter };