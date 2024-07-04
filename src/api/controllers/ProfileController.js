import express from "express";
import {Auth} from "../middleware/authMiddleWare.js";
import {userProfile} from "../services/ProfileService.js";

export const profileController = express.Router();

profileController.get("/get-profile/:userId/:email", userProfile);