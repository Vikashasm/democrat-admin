import React, { useEffect } from "react";
import Router from "next/router";
import Main from "../components/Main";

import Usercontent from "../components/Usercontent";
import EmployeeContextProvider from "../components/context/Employeecontext";

const users = () => {
  useEffect(() => {
    if (!localStorage.getItem("medicareAdmin")) {
      Router.push("/login");
    }
  }, []);
  return (
    <>
      <Main />
      <EmployeeContextProvider>
        <Usercontent />
      </EmployeeContextProvider>
    </>
  );
};

export default users;
