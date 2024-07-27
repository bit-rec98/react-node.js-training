import { Router } from "express";
import { createOrder, deleteOrder, getAllOrders, getOrderById, updateOrder } from "../controllers/ordersController";

const ordersRoutes = Router();

ordersRoutes.get("/orders", getAllOrders);
ordersRoutes.get("/orders/:id", getOrderById);
ordersRoutes.post("/orders", createOrder);
ordersRoutes.put("/orders/:id", updateOrder);
ordersRoutes.delete("/orders/:id", deleteOrder);

export default ordersRoutes;
