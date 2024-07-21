import { ObjectId } from "mongoose";

export interface IOrder {
  orderDetailId: Array<ObjectId>;
  userId: Array<ObjectId>;
  total: number;
}