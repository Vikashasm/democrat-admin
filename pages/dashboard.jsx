import React, { useEffect } from "react";
import Main from "../components/Main";
import Dashboardcontent from "../components/Dashboardcontent";
import EmployeeContextProvider from "../components/context/Employeecontext";
import ProductContextProvider from "../components/context/ProductContext";
import ContactContextProvider from "../components/context/ContactContext";
import DeletedContextProvider from "../components/context/DeletedContext";
import Router from "next/router";

const dashboard = () => {
  useEffect(() => {
    if (!localStorage.getItem("medicareAdmin")) {
      Router.push("/login");
    }
  }, []);
  return (
    <>
      <EmployeeContextProvider>
        <ProductContextProvider>
          <ContactContextProvider>
            <DeletedContextProvider>
              <Main />
              <Dashboardcontent />
            </DeletedContextProvider>
          </ContactContextProvider>
        </ProductContextProvider>
      </EmployeeContextProvider>
    </>
  );
};

export default dashboard;
