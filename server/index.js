import express from 'express';
import dotenv from 'dotenv';
import { UserRouter } from './routes/user.js';
import mongoose from 'mongoose'; // Import mongoose
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
dotenv.config();
import axios from 'axios';
import multer from 'multer';
import bodyParser from 'body-parser';
import checkout1 from './models/Checkout.js';

const port = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(cors());
app.use(UserRouter);
app.use(bodyParser.json());

// API creation

app.get('/', (req, res) => {
  res.send('Express App is running.');
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

app.listen(port, () => {
  console.log(`Server is is running on PORT NUMBER ${port}`);
});

// hosting in render process
import { fileURLToPath } from 'url';
import { dirname } from 'path';
// import { log } from 'console';
import Product from './models/Product.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve static files from the 'dist' directory

// if (process.env.NODE_ENV === 'production') {
// app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static('dist'));
// }

// Route all requests to the index.html file
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

//khalti payment

app.post('/khalti', async (req, res) => {
  try {
    const payload = req.body;
    const khaltiResponse = await axios.post(
      'https://a.khalti.com/api/v2/epayment/initiate/',
      payload,
      {
        headers: {
          Authorization: `Key ${process.env.KHALTI_KEY}`,
        },
      }
    );

    // Handle the response from Khalti API
    console.log(khaltiResponse.data);
    res.json({
      success: true,
      data: khaltiResponse.data,
    });
  } catch (error) {
    // Handle any errors that occur during the request
    console.error('Error:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while communicating with Khalti API' });
  }
});

// app.use(express.urlencoded({ extended: false }))

// const upload = multer({ dest: 'uploads/' });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'dist/images/products');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    // Check file type here
    const allowedMimeTypes = ['image/jpeg', 'image/png'];
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type.'));
    }
  },
});
//creating  endpoint for images

app.post('/upload', upload.single('image'), (req, res) => {
  //   console.log(req.body);
  console.log(req.file);
  // return res.redirect("/")
  return res.json({
    imageUrl: `images/products/${req.file?.originalname}`,
  });
});

// Route handler for handling order data
app.post('/orderdata', async (req, res) => {
  try {
    // Extract order data from the request body
    const {
      fullname,
      paymentType,
      address,
      phone,
      city,
      province,
      postalCode,
      priceTopay,
    } = req.body;

    // Assuming you want to save the order data to a database using the checkout model
    const newCheckout = new checkout1({
      fullname,
      paymentType,
      address,
      phone,
      city,
      province,
      postalCode,
      priceTopay,
    });

    // Save the order data to the database
    await newCheckout.save();

    // Send a success response
    res
      .status(200)
      .json({ success: true, message: 'Order data saved successfully' });
  } catch (error) {
    // If an error occurs, send an error response
    console.error('Error saving order data:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});
