import { Model, Schema, model } from "mongoose";
import { IProduct } from "../interfaces/products";

// Schema structuring
const ProductSchema = new Schema<IProduct>({
  // Not necessary to assign id, mongodb assigns IDs automatically
  /* id: {
    type: Schema.Types.ObjectId,
    default: new mongoose.Types.ObjectId(),
    unique: true,
  }, */
  name: {
    type: String,
    required: true,
    unique: true,
    toLowerCase: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  brand: {
    type: String,
    required: true,
    toLowerCase: true,
    trim: true,
  },
  stock: {
    type: Number,
    required: true,
    trim: true,
  },
});

// Model creation
const ProductModel: Model<IProduct> = model<IProduct>("Products", ProductSchema);

// Model export
export default ProductModel;
