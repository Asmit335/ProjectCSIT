// Route handler for adding a product
import express from 'express';
import Product from '../models/Product';
import bodyParser from 'body-parser'
router.use(bodyParser.json());

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
        console.error("Error saving product data:");
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});

export default router;










app.post('/upload', async(req, res) => {
    let products = await Product.find({})
    let id;
    if (products.length > 0) {
        let lastProductArray = products.slice(-1)
        let lasProduct = lastProductArray[0]
        id = lasProduct.id + 1;
    } else {
        id = 1
    }
    const product = new Product({
        id: id,
        title: req.body.title,
        image: req.body.image,
        category: req.body.category,
        price: req.body.price,

    })
    console.log(product);
    await product.save()
    console.log("Saved product data");
    res.json({
        success: true,
        id: id,
        title: req.body.title,
        image: req.body.image,
        category: req.body.category,
        price: req.body.price,

    })
})

// creating api
// for deleting products by admin


app.post('/removeproduct', async(req, res) => {
    await Product.findOneAndDelete({ id: req.body.id })
    console.log("Removed");
    res.json({
        success: true,
        title: req.body.title
    })
})

// creating api
// for getting all entire producct when clicked

app.get('/allproducts', async(req, res) => {
    let products = await Product.find({})
    console.log("All products fetched");
    res.send(products)
})