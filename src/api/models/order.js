import {model} from "mongoose";
import User from "./user.js";

import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        reference: "User",
        require: true
    },
    products: [{
        name: {
            type: String,
            require: true
        },
        quantity: {
            type: Number,
            require: true
        },
        price: {
            type: Number,
            require: true
        },
        image: {
            type: String,
            require: true
        },
    }],
    totalPrice: {
        type: Number,
        require: true
    },
    shippingAddress: {
        name: {
            type: String,
            require: true
        },
        mobileNo: {
            type: String,
            require: true
        },
        houseNo: {
            type: String,
            require: true
        },
        street: {
            type: String,
            require: true
        },
        landMark: {
            type: String,
            require: true
        },
        postalCode: {
            type: String,
            require: true
        },
    },
    paymentMethod: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
});

const Order = model("Order", orderSchema);

// module.exports = Order;
export default Order;