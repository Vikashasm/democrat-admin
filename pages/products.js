import React, { useEffect, useState } from "react";
import Router from "next/router";
import Main from "../components/Main";
import ProductList from "../components/mine/ProductList";
import ProductContextProvider from "../components/context/ProductContext";

const products = () => {
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
                  <ProductList />
                </ProductContextProvider>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default products;
