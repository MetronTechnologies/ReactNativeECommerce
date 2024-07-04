import express from "express";
import {getUserAddresses, updateUserAddress} from "../services/LocationService.js";


export const locationController = express.Router();

locationController.put("/update/:userId", updateUserAddress);
locationController.get("/getAll/:userId", getUserAddresses);