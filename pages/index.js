import React, { useEffect } from "react";
import Main from "../components/Main";
import Router from "next/router";

export default function Home() {
  useEffect(() => {
    Router.push("/dashboard");
  }, []);
  return (
    <>
      <Main />
    </>
  );
}
