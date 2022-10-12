import React from "react";

import Main from "../components/Main";
import UpdateUserContent from "../components/mine/UpdateUserContent";
import EmployeeList from "../components/EmployeeList";
import EmployeeContextProvider from "../components/context/Employeecontext";

import Usercontent from "../components/Usercontent";

const updateduser = () => {
  return (
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
  );
};

export default updateduser;
