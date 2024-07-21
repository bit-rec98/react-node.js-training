import { ObjectId } from "mongoose";

export interface IOrderDetail {
  itemsId: Array<ObjectId>;
  totalPrice: number;
  itemsAmount: number;
}