import express from "express";
import {signIn, signUp, test, verifyToken} from "../services/AuthService.js";


export const authController = express.Router();

authController.post("/signIn", signIn);
authController.post("/signUp", signUp);
authController.get("/verify/:token", verifyToken);
authController.get("/test", test);



