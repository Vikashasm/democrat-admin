import React from "react";

import Main from "../components/Main";
import ContactList from "../components/mine/ContactList";
import ContactContextProvider from "../components/context/ContactContext";

const contacts = () => {
  return (
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
  );
};

export default contacts;
