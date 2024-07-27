import axios from "axios";

export const getAllProducts = async () => {
  try {
    const response = axios.get("http://localhost:3000/api/products/");
    const products = (await response).data;
    // console.log(products);
    return products
  } catch (error) {
    throw new Error(`There was an error with the request: ${error}`);
  }
};
