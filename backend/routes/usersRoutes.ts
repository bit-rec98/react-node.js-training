import { Router } from "express";
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from "../controllers/userController";

const usersRoutes = Router();

usersRoutes.get("/users", getAllUsers);
usersRoutes.get("/users/:id", getUserById);
usersRoutes.post("/users", createUser);
usersRoutes.put("/users/:id", updateUser);
usersRoutes.delete("/users/:id", deleteUser);

export default usersRoutes;
