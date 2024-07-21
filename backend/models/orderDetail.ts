import {Model, Schema, model} from 'mongoose';
import { IOrderDetail } from '../interfaces/orderDetail';

const OrderDetailSchema = new Schema<IOrderDetail>({
  itemsId: [
    {
      type: Schema.Types.ObjectId,
      ref: "Products",
      required: true,
    },
  ],
  itemsAmount: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
});


const OrderDetailModel: Model<IOrderDetail> = model<IOrderDetail>('OrderDetail', OrderDetailSchema);

export default OrderDetailModel;