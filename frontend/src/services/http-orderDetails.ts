import axios from "axios";

export const getAllProducts = async () => {
  try {
    const response = axios.get("http://localhost:3000/api/order-details/");
    const orderDetails = (await response).data;
    console.log(orderDetails);
  } catch (error) {
    throw new Error(`There was an error with the request: ${error}`);
  }
};
