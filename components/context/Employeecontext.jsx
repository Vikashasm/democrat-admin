import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {
  const [employees, setEmployees] = useState([]);
  const [sortedUsers, setsortedUsers] = useState([]);
  const [sortedIncompleteUser, setsortedIncompleteUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://medicare-application.herokuapp.com/api/v1/admin/users", {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzFkZjQwMmJjNDYwYmNkNTljZDAwNWUiLCJpZCI6MjEsImVtYWlsIjoibmFpcmFnYXJnOTk5QGdtYWlsLmNvbSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NTIyNTAxOSwiZXhwIjoxNjY3ODE3MDE5fQ.Aa5fgkmYm7O3MwdtdzbpEBxZ6oqFngtbv-6nKN1DWh8",
        },
      })
      .then((res) => {
        console.log(res.data.users);
        setEmployees(res.data.users);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const sortedEmployees = employees.sort((a, b) =>
      a.name < b.name ? -1 : 1
    );
    const sortedUsersFn = () => {
      const sortingUsers = sortedEmployees.filter((user) => !user.isAdmin);
      setsortedUsers(sortingUsers);
    };
    const sortedIncompleteUserFn = () => {
      const sortingInUsers = sortedUsers.filter(
        (user) => !user.email || !user.phone
      );
      setsortedIncompleteUser(sortingInUsers);
    };
    sortedUsersFn();
    sortedIncompleteUserFn();
  }, [employees]);

  const addEmployee = (name, email, address, phone) => {
    setEmployees([...employees, { id: uuidv4(), name, email, address, phone }]);
  };

  const deleteSortedUsers = (id) => {
    console.log("way to delete", id);
    const deletingUser = sortedUsers.filter((employee) => employee.id != id);
    setsortedUsers(deletingUser);
    console.log(sortedUsers);
  };
  const deleteSortedInUsers = (id) => {
    console.log("way to delete", id);
    const deletingUser = sortedIncompleteUser.filter(
      (employee) => employee.id != id
    );
    setsortedIncompleteUser(deletingUser);
    console.log(sortedIncompleteUser);
  };

  const updateEmployee = (id, updatedEmployee) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === id ? updatedEmployee : employee
      )
    );
  };

  return (
    <EmployeeContext.Provider
      value={{
        sortedIncompleteUser,
        sortedUsers,
        addEmployee,
        deleteSortedUsers,
        deleteSortedInUsers,
        updateEmployee,
      }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContextProvider;
