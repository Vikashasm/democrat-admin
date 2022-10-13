import React from "react";

import Main from "../components/Main";
import ProductList from "../components/mine/ProductList";
import ProductContextProvider from "../components/context/ProductContext";

const allproducts = () => {
  return (
    <>
      <Main />
      <div className="container-xl ">
        <div className="table-responsive width_left_margin_3">
          <div className="table-wrapper">
            <ProductContextProvider>
              <ProductList />
            </ProductContextProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default allproducts;
