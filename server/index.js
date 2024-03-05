import express from 'express';
import dotenv from 'dotenv';
import { UserRouter } from './routes/user.js';
import mongoose from 'mongoose'; // Import mongoose
import cors from 'cors';
import cookieParser from "cookie-parser";
import path from 'path'
dotenv.config();
import axios from "axios"
import multer from 'multer'

const port = process.env.PORT || 3001
const app = express();
app.use(express.json());
app.use(cors({
    // origin: ["http://localhost:5173"],
    // credentials: true
}));
app.use(cookieParser())
app.use(cors())
app.use(UserRouter);






// API creation

app.get("/", (req, res) => {
    res.send("Express App is running.")
})



// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

app.listen(port, () => {
    console.log(`Server is running on PORT NUMBER ${port}`);
});

// hosting in render process
import { fileURLToPath } from 'url';
import { dirname } from 'path';
// import { log } from 'console';
import Product from './models/Product.js';

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = dirname(__filename);

// Serve static files from the 'dist' directory

if (process.env.NODE_ENV === "production") {

    app.use(express.static(path.join(__dirname, 'dist')));
}

// Route all requests to the index.html file
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

//khalti payment

app.post('/khalti', async(req, res) => {
    try {
        const payload = req.body;
        const khaltiResponse = await axios.post("https://a.khalti.com/api/v2/epayment/initiate/", payload, {
            headers: {
                Authorization: `Key ${process.env.KHALTI_KEY}`
            }
        });

        // Handle the response from Khalti API
        console.log(khaltiResponse.data);
        res.json({
            success: true,
            data: khaltiResponse.data
        });

    } catch (error) {
        // Handle any errors that occur during the request
        console.error("Error:", error);
        res.status(500).json({ error: 'An error occurred while communicating with Khalti API' });
    }
});





//image storage engine

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({ storage: storage })

//creating upload endpoint for images
app.use("/images", express.static('upload/images'))

app.post('/upload', upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        imageUrl: `http://localhost:${port}/images/${req.file.filename}`

    });
});


app.post('/addproduct', async(req, res) => {
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
        title: req.body.title
    })
})

//creating api for deleting products by admin


app.post('/removeproduct', async(req, res) => {
    await Product.findOneAndDelete({ id: req.body.id })
    console.log("Removed");
    res.json({
        success: true,
        title: req.body.title
    })
})

//crating api for getting all entire producct when clicked

app.get('/allproducts', async(req, res) => {
    let products = await Product.find({})
    console.log("All products fetched");
    res.send(products)
})