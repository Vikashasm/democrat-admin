import { useContext, useState, useEffect } from "react";
import { DeletedContext } from "../context/DeletedContext";
import { Modal, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import EditForm from "../EditFrom";

const Deleted = ({ deleted, ind }) => {
  const { deleteDeleted } = useContext(DeletedContext);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    handleClose();
  }, [deleted]);

  return (
    <>
      <td>{ind} </td>
      <td>{deleted.id} </td>
      <td>{deleted.reason}</td>
      <td>{deleted.date}</td>

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
            onClick={() => deleteDeleted(deleted.id)}
            className="btn text-danger btn-act"
            data-toggle="modal"
          >
            <i className="material-icons">&#xE872;</i>
          </button>
        </OverlayTrigger>
      </td>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Deleted</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm theDeleted={deleted} />
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

export default Deleted;
