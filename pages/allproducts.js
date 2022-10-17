import React, { useEffect, useState } from "react";
import Router from "next/router";
import Main from "../components/Main";
import AllProductList from "../components/mine/AllProductList";
import ProductContextProvider from "../components/context/ProductContext";

const allproducts = () => {
  const [Admin, setAdmin] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("medicareAdmin")) {
      Router.push("/login");
    } else {
      setAdmin(true);
    }
  }, []);
  return (
    <>
      {Admin && (
        <>
          <Main />
          <div className="container-xl ">
            <div className="table-responsive width_left_margin_3">
              <div className="table-wrapper">
                <ProductContextProvider>
                  <AllProductList />
                </ProductContextProvider>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default allproducts;
