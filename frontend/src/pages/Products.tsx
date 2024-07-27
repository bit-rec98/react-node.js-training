import { useEffect } from "react";
import { getAllProducts } from "../services/http-products";

const Products = () => {
  useEffect(() => {
    console.log(getAllProducts())

  }, []);




  return (
    <section>Products</section>
  )
}

export default Products