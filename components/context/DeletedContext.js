import React from "react";
import { createContext, useEffect, useState } from "react";

export const DeletedContext = createContext();

const DeletedContextProvider = (props) => {
  const [deleteds, setDeleteds] = useState([
    {
      id: "oOasdfaFHAa23ASaff",
      reason: "Deleted by admin",
      date: "Medication",
    },
    {
      id: "radOAdfuaFHAa23ASaff",
      reason: "Deleted by admin",
      date: "Medication",
    },
    {
      id: "a23AfdfAa23ASaff",
      reason: "Deleted by admin",
      date: "Medication",
    },
  ]);

  useEffect(() => {
    setDeleteds(JSON.parse(localStorage.getItem("deleteds")));
  }, []);

  useEffect(() => {
    localStorage.setItem("deleteds", JSON.stringify(deleteds));
  });

  const sortedDeleteds = deleteds.sort((a, b) => (a.name < b.name ? -1 : 1));

  const deleteDeleted = (id) => {
    setDeleteds(deleteds.filter((deleteds) => deleteds.id !== id));
  };

  const restoreDeleted = (id) => {
    setDeleteds(setDeleteds(deleteds.filter((deleteds) => deleteds.id !== id)));
  };

  return (
    <DeletedContext.Provider
      value={{ sortedDeleteds, deleteDeleted, restoreDeleted }}
    >
      {props.children}
    </DeletedContext.Provider>
  );
};

export default DeletedContextProvider;
