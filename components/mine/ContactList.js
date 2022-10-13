import React from "react";
import { Modal, Button, Alert } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { ContactContext } from "../context/ContactContext";
import Contact from "./Contact";
import AddForm from "../AddForm";
import Pagination from "../Pagination";

const ContactList = () => {
  const { sortedContacts } = useContext(ContactContext);

  const [showAlert, setShowAlert] = useState(false);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  //const handleShowAlert = () =>setShowAlert(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [contactsPerPage] = useState(2);

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  useEffect(() => {
    handleClose();

    return () => {
      handleShowAlert();
    };
  }, [sortedContacts]);

  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = sortedContacts.slice(
    indexOfFirstContact,
    indexOfLastContact
  );
  const totalPagesNum = Math.ceil(sortedContacts.length / contactsPerPage);

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage <b>Contacts</b>
            </h2>
          </div>
          {
            // <div className="col-sm-6">
            //   <Button
            //     onClick={handleShow}
            //     className="btn btn-success"
            //     data-toggle="modal"
            //   >
            //     <i className="material-icons">&#xE147;</i>{" "}
            //     <span>Add New Contact</span>
            //   </Button>
            // </div>
          }
        </div>
      </div>

      {
        // <Alert show={showAlert} variant="success">
        //   Contacts List Updated Succefully!
        // </Alert>
      }
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Email</th>
            <th>Description</th>
            <th>Date</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentContacts.map((contact) => (
            <tr key={contact.id}>
              <Contact contact={contact} />
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        pages={totalPagesNum}
        setCurrentPage={setCurrentPage}
        currentEmployees={currentContacts}
        sortedEmployees={sortedContacts}
      />
      {
        //  <Modal show={show} onHide={handleClose}>
        //    <Modal.Header closeButton>
        //      <Modal.Title>Add Contact</Modal.Title>
        //    </Modal.Header>
        //    <Modal.Body>
        //      <AddForm />
        //    </Modal.Body>
        //    <Modal.Footer>
        //      <Button variant="secondary" onClick={handleClose}>
        //        Close Button
        //      </Button>
        //    </Modal.Footer>
        //  </Modal>
      }
    </>
  );
};

export default ContactList;
