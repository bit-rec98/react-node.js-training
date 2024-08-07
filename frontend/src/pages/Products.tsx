// import { useEffect, useState } from "react";
// import { getAllProducts } from "../services/http-products";
// import { IProduct } from "../interfaces/Product";

import { Box, Container, Typography } from "@mui/material";
import ProductsBreadCrumbs from "../components/products/ProductsBreadCrumbs";
import ProductsFilters from "../components/products/ProductsFilters";
import ProductsGrid from "../components/products/ProductsGrid";

const Products = () => {
  // const productsSet: IProduct[] = [];

  // const [productsList, setProducts] = useState(productsSet);

  /* useEffect(() => {
    getAllProducts()
      .then((products: IProduct[]) =>
        products.map((product: IProduct) => {
          console.log(product)
          setProducts([product]);
        })
      )
      .catch((error) => {
        throw new Error(error.messsage);
      });
  }, []); */

  return (
    <section>
      <Container>
        <ProductsBreadCrumbs />
      </Container>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
          justifyContent: "space-evenly",
          gap: "4rem",
          flexWrap: "wrap",
        }}
      >
        <ProductsFilters />
        <Container
          sx={{
            width: "720px",
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            justifyContent: "space-evenly",
            gap: "2rem",
          }}
        >
          <Box>
            <Typography variant="h5" gutterBottom>
              Products available: {30}
            </Typography>
          </Box>
          <ProductsGrid></ProductsGrid>
        </Container>
      </Container>

      {/* {productsList.map((product: IProduct) => (
        <p key={product._id}>{product.name} - {product._id}</p>
      ))} */}
    </section>
  );
};

export default Products;
