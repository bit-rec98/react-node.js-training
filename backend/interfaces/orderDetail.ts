import { Types } from "mongoose";


export interface IOrderDetail {
  itemsId: Array<Types.ObjectId>;
  totalPrice: number;
  itemsAmount: number;
}