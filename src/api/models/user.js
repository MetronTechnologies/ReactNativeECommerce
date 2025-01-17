import {model} from "mongoose";

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        default: false
    },
    verificationToken: String,
    addresses: [{
        name: String,
        mobileNo: String,
        houseNo: String,
        street: String,
        landmark: String,
        city: String,
        country: String,
        postalCode: String,
    }],
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        reference: "Order"
    }],
    createdAt: {
        type: Date,
        default: Date.now()
    }
});


const User = model("User", userSchema);

// module.exports = User;

export default User;



