import { Router } from "express";
import { createOrder, deleteOrder, getAllOrders, getOrderById, updateOrder } from "../controllers/ordersController";

const ordersRoutes = Router();

ordersRoutes.get("/orders", getAllOrders);
ordersRoutes.get("/orders/:id", getOrderById);
ordersRoutes.get("/orders", createOrder);
ordersRoutes.get("/orders/:id", updateOrder);
ordersRoutes.get("/orders/:id", deleteOrder);

export default ordersRoutes;
