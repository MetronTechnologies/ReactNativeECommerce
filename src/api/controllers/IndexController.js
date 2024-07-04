// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const crypto = require("crypto");
// const nodemailer = require("nodemailer");
// const cors = require("cors");
// const jwt = require('jsonwebtoken');

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import crypto from "crypto";
import nodemailer from "nodemailer";
import cors from "cors";
import jwt from 'jsonwebtoken';
import {authController} from "./AuthController.js";
import {locationController} from "./LocationController.js";
import {orderController} from "./OrderController.js";
import {profileController} from "./ProfileController.js";


const app = express();
const port = 8000;
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(cors());
app.use('/auth', authController);
app.use('/location', locationController);
app.use('/order', orderController);
app.use('/profile', profileController);
app.get("/", (request, response) => {
    response.send("App is running");
});

const MONGODB_URI = "mongodb+srv://boyWonder:235711131719Adrian@cluster0.g0wfs.mongodb.net/ReactNativeECommerce?retryWrites=true&w=majority&appName=Cluster0";

let cached = global.mongoose || {conn: null, promise: null}

export const connectToDb = async() => {
    if(cached.conn)  return cached.conn;
    if(!MONGODB_URI) throw new Error("MONGODB_URL is missing");

    cached.promise = cached.promise || await mongoose.connect(MONGODB_URI, {
        dbName: 'ReactNativeECommerce',
        bufferCommands: false
    });
    cached.conn = await cached.promise;
    return cached.conn;
}

await connectToDb()
    .then(
        () => {
            console.log('Connected to mongo db')
        }
    )
    .catch(
        (e) => {
            console.log("Error connecting to db " + e);
        }
    )


app.listen(port, () => {
    console.log("Server is running on port " + port);
})

