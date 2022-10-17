import React, { useEffect } from "react";
import Router from "next/router";

const Logout = () => {
  useEffect(() => {
    localStorage.removeItem("medicareAdmin");
    localStorage.removeItem("medicareAdminData");
    Router.push("/login");
  }, []);

  return <></>;
};

export default Logout;
