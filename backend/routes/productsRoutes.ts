import { Router } from "express";
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "../controllers/productsController";

const productsRoutes = Router();

productsRoutes.get('/products', getAllProducts);
productsRoutes.get('/products/:id', getProductById);
productsRoutes.post('/products', createProduct);
productsRoutes.put('/products/:id', updateProduct);
productsRoutes.delete('/products/:id', deleteProduct);

export default productsRoutes;
