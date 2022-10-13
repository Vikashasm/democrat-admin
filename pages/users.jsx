import React from "react";

import Main from "../components/Main";

import Usercontent from "../components/Usercontent";
import EmployeeContextProvider from "../components/context/Employeecontext";

const users = () => {
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
