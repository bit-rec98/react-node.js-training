import { Request, Response } from "express";
import { IOrder } from "../interfaces/orders";
import OrderModel from "../models/orders";

export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const allOrders = await OrderModel.find()
      .populate('Orders', 'orderDetailId')
      .populate('Orders', 'userId');

    console.log(allOrders);
    res.json({
      log: "Existing orders",
      allOrders,
    });

    console.log("Orders delivered!");
  } catch (error) {
    throw new Error(`There was an error while getting all orders: ${error}`);
  }
};

export const getOrderById = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const order: IOrder | null = await OrderModel.findById(id);
    
    if(!order) {
      res.status(404)
      .json({
        log: 'Order not found'
      })
      return;
    };

    res.json({
      log: 'Order found',
      order
    })

    console.log('Order found successfully!');
  } catch (error) {
    throw new Error(`There was an error: ${error}`);
  }
};

export const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData: IOrder = req.body;

    const order = new OrderModel(orderData);

    await order.save();

    res.json({
      log: 'Order created successfully',
      order
    });

    console.log('Order created successfully!');
  } catch (error) {
    throw new Error(`There was an error: ${error}`);
  }
};

export const updateOrder = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const {...data} = req.body;

    const order = await OrderModel.findByIdAndUpdate(id, data, {new: true});

    if(!order){
      res.status(404)
      .json({
        log: 'Order not found'
      });
      return;
    }

    res.json({
      log: 'Order data updated',
      order
    });

    console.log('Order data updated successfully!');
  } catch (error) {
    throw new Error(`There was an error: ${error}`);
  }
};

export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;

    const order = await OrderModel.findByIdAndDelete(id);
    
    if(!order){
      res.status(404)
      .json({
        log: 'Order not found',
      });
      return;
    };

    res.json({
      log: 'Order removed',
      order
    });

    console.log('Order removed successfully!');
  } catch (error) {
    throw new Error(`There was an error: ${error}`);
  }
};
