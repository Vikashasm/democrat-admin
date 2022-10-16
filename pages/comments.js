import React, { useEffect } from "react";
import Router from "next/router";
import Main from "../components/Main";
import CommentList from "../components/mine/CommentList";
import CommentContextProvider from "../components/context/CommentContext";

const comments = () => {
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
            <CommentContextProvider>
              <CommentList />
            </CommentContextProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default comments;
