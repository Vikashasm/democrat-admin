import React, { useEffect, useState } from "react";
import Router from "next/router";
import Main from "../components/Main";
import ContactList from "../components/mine/ContactList";
import ContactContextProvider from "../components/context/ContactContext";

const contacts = () => {
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
                <ContactContextProvider>
                  <ContactList />
                </ContactContextProvider>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default contacts;
