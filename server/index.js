import express from 'express';
import dotenv from 'dotenv';
import { UserRouter } from './routes/user.js';
import mongoose from 'mongoose'; // Import mongoose
import cors from 'cors';
import cookieParser from "cookie-parser";
import path from 'path'
dotenv.config();

const port = process.env.PORT || 3000
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
        useNewUrlParser: true,
        useUnifiedTopology: true
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