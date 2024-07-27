import { Model, Schema, model } from "mongoose";
import { IOrder } from "../interfaces/order";

const OrderSchema = new Schema<IOrder>({
  orderDetailId: [
    {
      type: Schema.Types.ObjectId,
      ref: "OrderDetail",
    },
  ],
  userId: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
  total: {
    type: Number,
    required: true,
  },
});

const OrderModel: Model<IOrder> = model<IOrder>("Orders", OrderSchema);

export default OrderModel;
