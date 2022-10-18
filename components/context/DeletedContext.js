import React from "react";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const DeletedContext = createContext();

const DeletedContextProvider = (props) => {
  const [deleteds, setDeleteds] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://medicare-democrate.herokuapp.com/api/v1/admin/deleted/users",
        {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            token: JSON.parse(localStorage.getItem("medicareAdmin")),
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setDeleteds(res.data.users);
      })
      .catch((err) => console.log(err));
  }, []);

  const sortedDeleteds = deleteds.sort((a, b) => (a.name < b.name ? -1 : 1));

  const deleteDeleted = (id) => {
    setDeleteds(deleteds.filter((deleteds) => deleteds.id !== id));
  };
  return (
    <DeletedContext.Provider value={{ sortedDeleteds, deleteDeleted }}>
      {props.children}
    </DeletedContext.Provider>
  );
};

export default DeletedContextProvider;
