import React from "react";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    //axios
    //  .get(
    //    "https://medicare-application.herokuapp.com/api/v1/admin/user/products",
    //    {
    //      headers: {
    //        "Content-Type": "application/json; charset=utf-8",
    //        token:
    //          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzFkZjQwMmJjNDYwYmNkNTljZDAwNWUiLCJpZCI6MjEsImVtYWlsIjoibmFpcmFnYXJnOTk5QGdtYWlsLmNvbSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NTIyNTAxOSwiZXhwIjoxNjY3ODE3MDE5fQ.Aa5fgkmYm7O3MwdtdzbpEBxZ6oqFngtbv-6nKN1DWh8",
    //      },
    //    }
    //  )
    //  .then((res) => {
    //    setProducts(res.data.products);
    //  })
    //  .catch((err) => console.log(err));
    axios
      .get("https://medicare-democrate.herokuapp.com/api/v1/product", {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          token: JSON.parse(localStorage.getItem("medicareAdmin")),
        },
      })
      .then((res) => {
        console.log(res);
        setProducts(res.data.product);
      })
      .catch((err) => console.log(err));
  }, []);

  const sortedProducts = products.filter((prod) => !prod.read);

  const fileUploadReq = async (formData) => {
    return axios.post(
      "https://medicare-democrate.herokuapp.com/api/v1/upload?folder=product",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          token: JSON.parse(localStorage.getItem("medicareAdmin")),
        },
      }
    );
  };

  const productAddReq = async (newProduct) => {
    console.log(newProduct);
    return axios.post(
      "https://medicare-democrate.herokuapp.com/api/v1/product",
      newProduct,
      {
        headers: {
          token: JSON.parse(localStorage.getItem("medicareAdmin")),
        },
      }
    );
  };

  //const addProduct = (name, company, form, formData) => {
  const addProduct = async (newProduct, formData) => {
    const getFileName = await fileUploadReq(formData);

    newProduct.productImage = getFileName.data.file;
    const getNewAddedProduct = await productAddReq(newProduct);

    newProduct["productImagePath"] =
      getNewAddedProduct.data.product.productImagePath;
    setProducts([newProduct, ...products]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((products) => products.id !== id));
  };

  const updateProduct = (id, updatedProduct) => {
    setProducts(
      products.map((product) => (product.id === id ? updatedProduct : product))
    );
  };
  const approveProduct = (id) => {
    setProducts(products.filter((products) => products._id !== id));
    axios
      .put(
        `https://medicare-democrate.herokuapp.com/api/v1/admin/read/product/${id}`,
        {},
        {
          headers: {
            token: JSON.parse(localStorage.getItem("medicareAdmin")),
          },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <ProductContext.Provider
      value={{
        sortedProducts,
        addProduct,
        deleteProduct,
        updateProduct,
        approveProduct,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
