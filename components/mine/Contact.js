import { useContext, useState, useEffect } from "react";
import { ContactContext } from "../context/ContactContext";
import { Modal, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import EditForm from "../EditFrom";
import axios from "axios";

const Contactt = ({ contact }) => {
  const { deleteContact } = useContext(ContactContext);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    axios
      .get("https://medicare-application.herokuapp.com/api/v1/admin/contacts", {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzQxNTQ1YjIxNzM4NjY3YzJkOWExMWUiLCJpZCI6MjcsImVtYWlsIjoibmFpcmFnYXJnOTk5QGdtYWlsLmNvbSIsImlzQWRtaW4iOnRydWUsInByb2ZpbGVJZCI6IjUwZDljY2UwYTMyNzE1MDUyNGJlMzcyN2E2NGQyZiIsImlhdCI6MTY2NTIyNTg0MCwiZXhwIjoxNjY3ODE3ODQwfQ.25de1Uu3o6Jf5WIEtsftl4PU_NUANaJ1Ya6su0JFRIAs",
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    handleClose();
  }, [contact]);

  return (
    <>
      <td>{contact.email} </td>
      <td>{contact.description}</td>
      <td>{contact.date}</td>
      <td>{contact.pic != "" ? contact.pic : "NA"}</td>

      <td>
        <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Edit</Tooltip>}>
          <button
            onClick={handleShow}
            className="btn text-warning btn-act"
            data-toggle="modal"
          >
            <i className="material-icons">&#xE254;</i>
          </button>
        </OverlayTrigger>
        <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Delete</Tooltip>}>
          <button
            onClick={() => deleteContact(contact.id)}
            className="btn text-danger btn-act"
            data-toggle="modal"
          >
            <i className="material-icons">&#xE872;</i>
          </button>
        </OverlayTrigger>
      </td>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm theContact={contact} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close Button
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Contactt;
