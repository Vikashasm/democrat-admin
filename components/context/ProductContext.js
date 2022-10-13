import React from "react";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    axios
      .get(
        "https://medicare-application.herokuapp.com/api/v1/admin/user/products",
        {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzFkZjQwMmJjNDYwYmNkNTljZDAwNWUiLCJpZCI6MjEsImVtYWlsIjoibmFpcmFnYXJnOTk5QGdtYWlsLmNvbSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NTIyNTAxOSwiZXhwIjoxNjY3ODE3MDE5fQ.Aa5fgkmYm7O3MwdtdzbpEBxZ6oqFngtbv-6nKN1DWh8",
          },
        }
      )
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  const sortedProducts = products.sort((a, b) =>
    a.productName < b.productName ? -1 : 1
  );

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
