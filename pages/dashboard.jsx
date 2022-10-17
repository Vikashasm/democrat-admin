import React, { useEffect, useState } from "react";
import Main from "../components/Main";
import Dashboardcontent from "../components/Dashboardcontent";
import EmployeeContextProvider from "../components/context/Employeecontext";
import ProductContextProvider from "../components/context/ProductContext";
import ContactContextProvider from "../components/context/ContactContext";
import DeletedContextProvider from "../components/context/DeletedContext";
import Router from "next/router";

const dashboard = () => {
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
      )}
    </>
  );
};

export default dashboard;
