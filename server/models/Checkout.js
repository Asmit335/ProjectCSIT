import mongoose from "mongoose"

const { Schema, model } = mongoose

const checkoutSchema = new Schema({
    fullname: {
        type: String,
        required: true,

    },
    phone: {
        type: Number,
        required: true
    },
    paymentType: {
        type: String,
        required: true,
    },
    priceTopay: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },

    province: {
        type: String,
        required: true,
    },
    postalCode: {
        type: Number,
        required: true
    }
});

const checkout1 = model("OrderDetail", checkoutSchema)
export default checkout1