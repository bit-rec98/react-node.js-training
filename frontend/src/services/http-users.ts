import axios from "axios";

export const getAllUsers = async () => {
  try {
    const response = axios.get("http://localhost:3000/api/users/");
    const users = (await response).data;
    console.log(users);
    return users;
  } catch (error) {
    throw new Error(`There was an error with the request: ${error}`);
  }
};

/* export const getUserById = async (id: string) => {
  try {
    const response = axios.get(`http://localhost:3000/api/users/${id}`);
    const user = (await response).data;
    console.log(user);
    return user;
  } catch (error) {
    throw new Error(`There was an error with the request: ${error}`);
  }
}; */
