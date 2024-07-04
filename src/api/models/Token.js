import {model} from "mongoose";
import User from "./user.js";

import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema({
    userEmail: {
        type: String,
        require: true,
        unique: true
    },
    token: {
        type: Number,
        require: true,
        maxlength: [6, "Name length maximum is 6"],
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
});

const Token = model("Token", tokenSchema);

// module.exports = Order;
export default Token;