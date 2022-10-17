import React, { useEffect, useState } from "react";
import Router from "next/router";
import Main from "../components/Main";
import EmployeeList from "../components/EmployeeList";
import EmployeeContextProvider from "../components/context/Employeecontext";

import Usercontent from "../components/Usercontent";

const totaluser = () => {
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
                <EmployeeContextProvider>
                  <EmployeeList />
                </EmployeeContextProvider>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default totaluser;
