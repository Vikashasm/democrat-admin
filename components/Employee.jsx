import { useContext, useState, useEffect } from "react";
import { EmployeeContext } from "../components/context/Employeecontext";
import { Modal, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import EditForm from "../components/EditFrom";
import DeleteConfirmation from "./DeleteConfirmation";

const Employee = ({ employee, ind }) => {
  console.log(employee);
  const { deleteEmployee, deleteSortedInUsers } = useContext(EmployeeContext);

  const [type, settype] = useState(null);

  const [displayConfirmationModal, setDisplayConfirmationModal] =
    useState(false);
  const [deleteMessage, setDeleteMessage] = useState(null);
  const [userMessage, setUserMessage] = useState(null);

  // Handle the displaying of the modal based on type and id
  const showDeleteModal = (type) => {
    settype(type);

    setUserMessage(null);
    setDeleteMessage(
      `Are you sure you want to delete the Approved User '${employee.username}'?`
    );
    setDisplayConfirmationModal(true);
  };

  // Hide the modal
  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
  };

  // Handle the actual deletion of the item
  const submitDelete = (type, ind, id) => {
    setUserMessage(
      `The Approved User '${employee.username}' was deleted successfully.`
    );
    deleteSortedInUsers(id);

    setDisplayConfirmationModal(false);
  };
  //const [show, setShow] = useState(false);
  //
  //const handleShow = () => setShow(true);
  //const handleClose = () => setShow(false);
  //
  useEffect(() => {
    //handleClose();
  }, [employee]);

  return (
    <>
      <td>{employee.username}</td>
      <td>{employee.email}</td>
      <td>{employee.phone}</td>
      <td>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="18"
          fill="red"
          className="bi bi-trash3"
          onClick={() => showDeleteModal("user", employee.id, ind)}
          viewBox="0 0 16 16"
        >
          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
        </svg>
      </td>
      <DeleteConfirmation
        showModal={displayConfirmationModal}
        confirmModal={submitDelete}
        hideModal={hideConfirmationModal}
        type={type}
        id={employee.id}
        ind={ind}
        message={deleteMessage}
      />
      {
        // <td>
        //  <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Edit</Tooltip>}>
        //    <button
        //      onClick={handleShow}
        //      className="btn text-warning btn-act"
        //      data-toggle="modal"
        //    >
        //      <i className="material-icons">&#xE254;</i>
        //    </button>
        //  </OverlayTrigger>
        //  <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Delete</Tooltip>}>
        //    <button
        //      onClick={() => deleteEmployee(employee.id)}
        //      className="btn text-danger btn-act"
        //      data-toggle="modal"
        //    >
        //      <i className="material-icons">&#xE872;</i>
        //    </button>
        //  </OverlayTrigger>
        //</td>
        // <Modal show={show} onHide={handleClose}>
        //   <Modal.Header closeButton>
        //     <Modal.Title>Edit Employee</Modal.Title>
        //   </Modal.Header>
        //   <Modal.Body>
        //     <EditForm theEmployee={employee} />
        //   </Modal.Body>
        //   <Modal.Footer>
        //     <Button variant="secondary" onClick={handleClose}>
        //       Close Button
        //     </Button>
        //   </Modal.Footer>
        // </Modal>
      }
    </>
  );
};

export default Employee;
