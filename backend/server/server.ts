import express, { Express } from "express";
import { connectDb } from "../database/dbConfig";
import cors from "cors";
import orderDetailRoutes from "../routes/orderDetailsRoutes";
import ordersRoutes from "../routes/ordersRoutes";
import productsRoutes from "../routes/productsRoutes";
import usersRoutes from "../routes/usersRoutes";
import errorHandler from "../middlewares/errorHandler";
require('dotenv').config()

export class Server {
  app: Express;

  //* Execution at constructor
  constructor() {
    this.app = express();
    this.cors()
    this.dbConnect();
    this.routes();
    this.middlewares();
  }

  //* Declare methods to execute routes, dbConnection and middlewares
  private async dbConnect(): Promise<void> {
    await connectDb();
  }

  private middlewares(): void {
    this.app.use(express.json());
    this.app.use(errorHandler);
    // this.app.use(validations);
  }

  private cors():void{
    this.app.use(cors())
  }

  private routes(): void {
    this.app.use("/api", productsRoutes);
    this.app.use("/api", usersRoutes);
    this.app.use("/api", ordersRoutes);
    this.app.use("/api", orderDetailRoutes);
  }

  //* Set port
  listen(): void {
    const PORT = process.env.PORT || 3000;
    this.app.listen(PORT, () => {
      console.log(`Server running at port: ${PORT}`);
    });
  }
}
