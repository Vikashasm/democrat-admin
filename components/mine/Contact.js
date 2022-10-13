import { useContext, useState, useEffect, useRef } from "react";
import { ContactContext } from "../context/ContactContext";
import { Modal, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import EditForm from "../EditFrom";
import axios from "axios";

const Contactt = ({ contact }) => {
  const { deleteContact } = useContext(ContactContext);
  const imgRef = useRef(null);
  const [imgVisible, setimgVisible] = useState(false);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  useEffect(() => {
    console.log(imgRef);
    let handler = (e) => {
      if (!imgRef.current.contains(e.target)) {
        setimgVisible(false);
      }
    };
    handleClose();
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [contact]);
  const date = new Date(contact.createdAt).toDateString();

  return (
    <>
      <td>{contact.email} </td>
      <td>{contact.description}</td>
      <td>{date}</td>
      <td>
        {contact.contactImagePath != "" ? (
          <img
            ref={imgRef}
            src={contact.contactImagePath}
            width={40}
            height={40}
            onClick={() => setimgVisible(true)}
          />
        ) : (
          "NA"
        )}
      </td>

      <td>
        <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Edit</Tooltip>}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-hand-thumbs-up-fill"
            viewBox="0 0 16 16"
            fontSize="40px"
          >
            <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
          </svg>
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
      <div
        style={{
          display: imgVisible ? "block" : "none",
          position: "absolute",
          zIndex: "30",
          right: "40%",
        }}
      >
        <img
          ref={imgRef}
          src={contact.contactImagePath}
          width={600}
          height={500}
        />
      </div>
    </>
  );
};

export default Contactt;
