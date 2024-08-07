import axios from "axios";

export const getAllProducts = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/products/");
    if(response.status !== 200){
      throw new Error(`There was an error with the request - ${response.status}`);
    }
    const products = response.data;
    // console.log(products.allProducts)


    return products.allProducts;
  } catch (error) {
    throw new Error(`There was an error with the request: ${error}`);
  }
};
