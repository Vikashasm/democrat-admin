import React, { useEffect } from "react";
import Main from "../components/Main";
import Router from "next/router";

export default function Home() {
  useEffect(() => {
    if (localStorage.getItem("medicareAdmin")) {
      Router.push("/dashboard");
    } else {
      Router.push("/login");
    }
  }, []);
  return <Main />;
}
