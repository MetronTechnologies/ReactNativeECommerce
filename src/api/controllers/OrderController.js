import express from "express";
import {createOrder, getOrders} from "../services/OrderService.js";

export const orderController = express.Router();

orderController.post("/create", createOrder);
orderController.get("/get-orders/:userId/:email", getOrders);