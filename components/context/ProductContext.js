import React from "react";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [products, setProducts] = useState([
    {
      brand: "Now foods",
      name: "Vitamin B12",
      category: "Medication",
      form: "Capsules",
      pic: "",
    },
    {
      brand: "Now foods",
      name: "Vitamin B12",
      category: "Medication",
      form: "Capsules",
      pic: "",
    },
    {
      brand: "Now foods",
      name: "Vitamin B12",
      category: "Medication",
      form: "Capsules",
      pic: "",
    },
  ]);

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("products")));
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  });

  const sortedProducts = products.sort((a, b) => (a.name < b.name ? -1 : 1));

  const addProduct = (brand, name, category, form, pic) => {
    setProducts([
      ...products,
      { id: uuidv4(), brand, name, category, form, pic },
    ]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((products) => products.id !== id));
  };

  const updateProduct = (id, updatedProduct) => {
    setProducts(
      products.map((product) => (product.id === id ? updatedProduct : product))
    );
  };

  return (
    <ProductContext.Provider
      value={{ sortedProducts, addProduct, deleteProduct, updateProduct }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
