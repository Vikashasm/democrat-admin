import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {
  const [employees, setEmployees] = useState([]);
  const [sortedUsers, setsortedUsers] = useState([]);
  const [sortedIncompleteUser, setsortedIncompleteUser] = useState([]);
  const [sortedUpdatedUsers, setsortedUpdatedUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://medicare-application.herokuapp.com/api/v1/admin/users", {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          token: JSON.parse(localStorage.getItem("medicareAdmin")),
        },
      })
      .then((res) => {
        setEmployees(res.data.users);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const sortedEmployees = employees.sort((a, b) =>
      a.name < b.name ? -1 : 1
    );
    const sortedUsersFn = () => {
      const sortingUsers = sortedEmployees.filter(
        (user) => !user.isAdmin && user.email && user.phone
      );
      setsortedUsers(sortingUsers);
    };
    const sortedIncompleteUserFn = () => {
      const sortingInUsers = sortedEmployees.filter(
        (user) => (!user.email || !user.phone) && !user.isAdmin
      );
      setsortedIncompleteUser(sortingInUsers);
    };
    const sortedUpdatedUsersFn = () => {
      if (sortedUsers.length > 0) {
        const sortingUdatedUser = sortedUsers.filter(
          (user) => user.createdAt != user.updatedAt
        );
        setsortedUpdatedUsers(sortingUdatedUser);
      }
    };
    sortedUsersFn();
    sortedIncompleteUserFn();
    sortedUpdatedUsersFn();
  }, [employees]);

  const addEmployee = (name, email, address, phone) => {
    setEmployees([...employees, { id: uuidv4(), name, email, address, phone }]);
  };

  const deleteUserReq = async (id) => {
    return axios
      .patch(
        `http://medicare-application.herokuapp.com/api/v1/admin/temporary/delete/user/${id}`,
        {},
        {
          headers: {
            token: JSON.parse(localStorage.getItem("medicareAdmin")),
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  const deleteSortedUsers = async (id) => {
    const deletingUser = sortedUsers.filter((employee) => employee._id != id);
    const deleteUser = await deleteUserReq(id);
    setsortedUsers(deletingUser);
  };
  const deleteSortedInUsers = async (id) => {
    const deletingUser = sortedIncompleteUser.filter(
      (employee) => employee._id != id
    );
    const deleteUser = await deleteUserReq(id);
    setsortedIncompleteUser(deletingUser);
  };

  const approvedUpdatedUser = (id) => {
    const filteringUpdatedUser = sortedUpdatedUsers.filter(
      (user) => user._id != id
    );
    setsortedUpdatedUsers(filteringUpdatedUser);
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
        sortedUpdatedUsers,
        addEmployee,
        deleteSortedUsers,
        deleteSortedInUsers,
        updateEmployee,
        approvedUpdatedUser,
      }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContextProvider;
