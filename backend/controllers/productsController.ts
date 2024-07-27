import { Request, Response } from "express";
import ProductModel from "../models/product";
import { IProduct } from "../interfaces/product";

// GET
export const getAllProducts = async ({}, res: Response) => {
  // All products search
  const allProducts = await ProductModel.find();

  res.json({
    log: "Existent products",
    allProducts,
  });

  console.log("Products delivered!");
};

// GET BY ID
export const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params;

  //! If using ObjectId to get the _id of an item, use the "BY ID" mongoose methods
  const product: IProduct | null = await ProductModel.findById(id);

  if (!product) {
    res.status(404).json({ log: "Product not found" });
    return;
  }

  res.json({
    log: "Product found",
    product,
  });
  console.log("Product found successfully");
};

// POST
export const createProduct = async (req: Request, res: Response) => {
  try {
    const productData: IProduct = req.body;

    // Model creation
    const product = new ProductModel(productData);

    // Product save at DB
    await product.save();

    res.json({
      log: "Product created successfully",
      product,
    });

    console.log("Product created successfully");
  } catch (error) {
    throw new Error(
      `There was an error while creating the new product: ${error}`
    );
  }
};

// UPDATE
export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { ...data } = req.body;

  //   Product update
  const product = await ProductModel.findByIdAndUpdate(id, data, { new: true });

  if (!product) {
    res.status(404).json({ log: "Product not found" });
    return;
  }

  res.json({
    log: "Product data updated",
    product,
  });

  console.log("Product updated successfully!");
};

// DELETE
export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  // Product deletion
  const product = await ProductModel.findByIdAndDelete(id);

  if (!product) {
    res.status(404).json({
      log: "The product doesn't exist",
    });
    return;
  }

  res.json({
    log: "Product removed successfully!",
    product,
  });

  console.log("Product removed from the database!");
};
