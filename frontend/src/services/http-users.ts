import axios from "axios";

export const getAllProducts = async () => {
  try {
    const response = axios.get("http://localhost:3000/api/users/");
    const users = (await response).data
    console.log(users);
  } catch (error) {
    throw new Error(`There was an error with the request: ${error}`);
  }
};
