import { Types } from "mongoose";

export interface IOrder {
  orderDetailId: Array<Types.ObjectId>;
  userId: Types.ObjectId;
  total: number;
}