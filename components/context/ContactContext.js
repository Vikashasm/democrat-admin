import React from "react";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ContactContext = createContext();

const ContactContextProvider = (props) => {
  const [contacts, setContacts] = useState([
    {
      email: "@gmail.com",
      description: "Medication not working",
      date: "Capsules",
      pic: "",
    },
    {
      email: "@yahoo.com",
      description: "you should die",
      date: "Capsules",
      pic: "Cat",
    },
    {
      email: "@nobody.com",
      description: "Medication are working Thanks",
      date: "Capsules",
      pic: "Dog",
    },
  ]);

  useEffect(() => {
    setContacts(JSON.parse(localStorage.getItem("contacts")));
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  });

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
