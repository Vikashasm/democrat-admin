import React from "react";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [products, setProducts] = useState([]);
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

  const addProduct = (name, company, form, pic) => {
    let data = {
      productName: name,
      companyName: company,
      productForm: form,
      productImage: "5.png",
    };
    axios
      .post("http://medicare-application.herokuapp.com/api/v1/product", data, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzQxNTQ1YjIxNzM4NjY3YzJkOWExMWUiLCJpZCI6MjcsImVtYWlsIjoibmFpcmFnYXJnOTk5QGdtYWlsLmNvbSIsImlzQWRtaW4iOnRydWUsInByb2ZpbGVJZCI6IjUwZDljY2UwYTMyNzE1MDUyNGJlMzcyN2E2NGQyZiIsImlhdCI6MTY2NTIyODc1NywiZXhwIjoxNjY3ODIwNzU3fQ.LVDONV1LzpPXEOMhVq5pX-0dfQj6kxGj24-3Ro0DO4I",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    setProducts([...products, data]);
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
