import { products } from "../data/products.js";

export const getAllProducts = (req, res) => {
  res.json(products)
}

export const getProductById = (req, res) => {
  const product = products.items.find(p => p.id === req.params.id);
  if (product){
    res.json(product)
  } else {
    res.status(404).json({message: "Prodcut not found"})
  }
}