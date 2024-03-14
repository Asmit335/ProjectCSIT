import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
    image: String
}, {
    collection: "imageDetail"
});

export default ImageSchema;