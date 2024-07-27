import { Model, Schema, model } from "mongoose";
import { IUser } from "../interfaces/user";

// Schema creation
const UserSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
    toLowerCase: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    toLowerCase: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    toLowerCase: true,
    trim: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  }
});

// Model creation
const UserModel: Model<IUser> = model<IUser>('Users', UserSchema)

export default UserModel;