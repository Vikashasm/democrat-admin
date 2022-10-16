import React, { useEffect } from "react";
import Router from "next/router";
import Main from "../components/Main";
import DeletedList from "../components/mine/DeletedList";
import DeletedContextProvider from "../components/context/DeletedContext";

const deleteuserss = () => {
  useEffect(() => {
    if (!localStorage.getItem("medicareAdmin")) {
      Router.push("/login");
    }
  }, []);
  return (
    <>
      <Main />
      <div className="container-xl ">
        <div className="table-responsive width_left_margin_3">
          <div className="table-wrapper">
            <DeletedContextProvider>
              <DeletedList />
            </DeletedContextProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default deleteuserss;
