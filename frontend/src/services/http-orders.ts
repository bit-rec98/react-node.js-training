import axios from "axios";

export const getAllProducts = async () => {
  try {
    const response = axios.get("http://localhost:3000/api/orders/");
    const orders = (await response).data;
    console.log(orders);
  } catch (error) {
    throw new Error(`There was an error with the request: ${error}`);
  }
};
