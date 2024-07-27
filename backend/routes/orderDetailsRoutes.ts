import { Router } from "express";
import {
  createOrderDetail,
  deleteOrderDetail,
  getAllOrderDetails,
  getOrderDetailById,
  updateOrderDetail,
} from "../controllers/orderDetailController";

const orderDetailRoutes = Router();

orderDetailRoutes.get("/order-detail", getAllOrderDetails);
orderDetailRoutes.get("/order-detail/:id", getOrderDetailById);
orderDetailRoutes.post("/order-detail", createOrderDetail);
orderDetailRoutes.put("/order-detail/:id", updateOrderDetail);
orderDetailRoutes.delete("/order-detail/:id", deleteOrderDetail);

export default orderDetailRoutes;
