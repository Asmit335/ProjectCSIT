//schema for creating products
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const productSchema = new Schema({
  // id: {
  //   type: Number,
  //   required: true,
  //   unique: true,

  // },
  //   _id: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     index: true,
  //     required: true,
  //     auto: true,
  //   },
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  image: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

const Product = model('Product', productSchema);

export default Product;
