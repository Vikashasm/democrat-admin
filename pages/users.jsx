import React, { useEffect, useState } from "react";
import Router from "next/router";
import Main from "../components/Main";

import Usercontent from "../components/Usercontent";
import EmployeeContextProvider from "../components/context/Employeecontext";

const users = () => {
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
          <EmployeeContextProvider>
            <Usercontent />
          </EmployeeContextProvider>
        </>
      )}
    </>
  );
};

export default users;
