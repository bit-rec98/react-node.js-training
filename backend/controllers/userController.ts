import { Request, Response } from "express";
import UserModel from "../models/user";
import { IUser } from "../interfaces/user";

// GET
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await UserModel.find();
    
    res.status(200).json({
      log: "Existing users",
      allUsers,
    });

    console.log("Users delivered!");
  } catch (error) {
    throw new Error(`There was an error while getting users: ${error}`);
  }
};

// GET BY ID
export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user: IUser | null = await UserModel.findById(id);

    if (!user) {
      res.status(404).json({
        log: "User ID not found",
      });
      return;
    }

    res.status(200).json({
      log: "User ID found",
      user,
    });
    console.log("User found successfully");
  } catch (error) {
    throw new Error(
      `There was an error while getting the specified user: ${error}`
    );
  }
};

// POST
export const createUser = async (req: Request, res: Response) => {
  try {
    const userData: IUser = req.body;

    const user = new UserModel(userData);

    await user.save();

    res.status(200).json({
      log: "User created successfully",
      user,
    });

    console.log("User created successfully!");
  } catch (error) {
    throw new Error(`There was an error while creating the new user: ${error}`);
  }
};

// PUT
export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { ...data } = req.body;

    const user = await UserModel.findByIdAndUpdate(id, data, { new: true });

    if (!user) {
      res.status(404).json({
        log: "User ID not found",
      });
      return;
    }

    res.status(200).json({
      log: "User data updated",
      user_data: user,
    });

    console.log("User updated successfully");
  } catch (error) {
    throw new Error(`There was an error while updating the new user: ${error}`);
  }
};

// DELETE
export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await UserModel.findByIdAndDelete(id);

  if (!user) {
    res.status(404).json({
      log: "User not found",
    });
    return;
  }

  res.status(200).json({
    log: "User removed successfully",
    user_removed: user,
  });

  console.log("User removed from the database successfully!");
};
