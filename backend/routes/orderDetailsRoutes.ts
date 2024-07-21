import { Router } from "express";
import { createOrderDetail, deleteOrderDetail, getAllOrderDetails, getOrderDetailById, updateOrderDetail } from "../controllers/orderDetailController";

const orderDetailRoutes = Router();

orderDetailRoutes.get('/order-detail', getAllOrderDetails);
orderDetailRoutes.get("/order-detail/:id", getOrderDetailById);
orderDetailRoutes.get("/order-detail", createOrderDetail);
orderDetailRoutes.get("/order-detail/:id", updateOrderDetail);
orderDetailRoutes.get("/order-detail/:id", deleteOrderDetail);


export default orderDetailRoutes;