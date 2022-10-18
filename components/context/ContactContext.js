import React from "react";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ContactContext = createContext();

const ContactContextProvider = (props) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios
      .get("https://medicare-democrate.herokuapp.com/api/v1/admin/contacts", {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          token: JSON.parse(localStorage.getItem("medicareAdmin")),
        },
      })
      .then((res) => {
        console.log(res.data.contacts);
        setContacts(res.data.contacts);
      })
      .catch((err) => console.log(err));
  }, []);

  const sortedContacts = contacts.sort((a, b) => (a.name < b.name ? -1 : 1));

  const addContact = (email, description, date, pic) => {
    setContacts([...contacts, { id: uuidv4(), email, description, date, pic }]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contacts) => contacts.id !== id));
  };

  const updateContact = (id, updatedContact) => {
    setContacts(
      contacts.map((contact) => (contact.id === id ? updatedContact : contact))
    );
  };

  return (
    <ContactContext.Provider
      value={{ sortedContacts, addContact, deleteContact, updateContact }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactContextProvider;
