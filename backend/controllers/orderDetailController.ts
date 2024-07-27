import { Request, Response } from "express";
import { IOrderDetail } from "../interfaces/orderDetail";
import OrderDetailModel from "../models/orderDetail";

// GET
export const getAllOrderDetails = async (req: Request, res: Response) => {
  try {
    const allOrderDetails = await OrderDetailModel.find();

    res.json({
      log: "Existing order details",
      allOrderDetails,
    });

    console.log("Orders delivered!");
  } catch (error) {
    throw new Error(`There was an error while getting all orders: ${error}`);
  }
};

// GET BY ID
export const getOrderDetailById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const orderDetail: IOrderDetail | null = await OrderDetailModel.findById(
      id
    );
    console.log(id);
    console.log(typeof orderDetail?.itemsId);

    if (!orderDetail) {
      res.status(404).json({
        log: "Order detail not found",
      });
      return;
    }

    res.json({
      log: "Order detail found",
      orderDetail,
    });

    console.log("Order detail found successfully!");
  } catch (error) {
    throw new Error(`There was an error: ${error}`);
  }
};

// POST
export const createOrderDetail = async (req: Request, res: Response) => {
  console.log(req, "\n", res); //To check if there's a log, there's nothing when I execute the method

  try {
    const orderDetailData: IOrderDetail = req.body;
    console.log(orderDetailData);

    const orderDetail = new OrderDetailModel(orderDetailData);

    await orderDetail.save();

    res.json({
      log: "Order detail created",
      orderDetail,
    });

    console.log("Order detail created successfully!");
  } catch (error) {
    throw new Error(`There was an error: ${error}`);
  }
};

// PUT
export const updateOrderDetail = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { ...data } = req.body;

    const order = await OrderDetailModel.findByIdAndUpdate(id, data, {
      new: true,
    });

    if (!order) {
      res.status(404).json({
        log: "Order detail not found",
      });
      return;
    }

    console.log("Order detail data updated successfully!");
  } catch (error) {
    throw new Error(`There was an error: ${error}`);
  }
};

// DELETE
export const deleteOrderDetail = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const orderDetail = await OrderDetailModel.findByIdAndDelete(id);

    if (!orderDetail) {
      res.status(404).json({
        log: "Order detail not found",
      });
      return;
    }

    res.json({
      log: "Order detail removed",
      orderDetail,
    });

    console.log("Order removed successfully!");
  } catch (error) {
    throw new Error(`There was an error: ${error}`);
  }
};
