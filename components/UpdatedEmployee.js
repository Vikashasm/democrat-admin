import { useContext, useState, useEffect } from "react";
import { EmployeeContext } from "../components/context/Employeecontext";
import { Modal, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import EditForm from "../components/EditFrom";
import DeleteConfirmation from "./DeleteConfirmation";

const UpdatedEmployee = ({ employee, ind }) => {
  console.log(employee);
  const { approvedUpdatedUser } = useContext(EmployeeContext);

  const [displayConfirmationModal, setDisplayConfirmationModal] =
    useState(false);
  const [approveMessage, setapproveMessage] = useState(null);
  const [userMessage, setUserMessage] = useState(null);

  // Handle the displaying of the modal based on type and id
  const showApproveModal = () => {
    setUserMessage(null);
    setapproveMessage(
      `Are you sure you want to Approve the user updates '${employee.username}'?`
    );
    setDisplayConfirmationModal(true);
  };

  // Hide the modal
  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
  };

  // Handle the actual deletion of the item
  const submitApproval = (type, ind, id) => {
    setUserMessage(
      `The User '${employee.username}' was approved successfully.`
    );
    approvedUpdatedUser(employee._id);
    setDisplayConfirmationModal(false);
  };
  useEffect(() => {
    //handleClose();
  }, [employee]);

  return (
    <>
      <td>{employee.username}</td>
      <td>{employee.email}</td>
      <td>{employee.phone}</td>
      <td style={{ paddingLeft: "3%" }}>
        <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Read</Tooltip>}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="green"
            class="bi bi-eye-fill"
            viewBox="0 0 16 16"
            onClick={() => showApproveModal("user", employee.id, ind)}
          >
            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
          </svg>
        </OverlayTrigger>
      </td>
      <DeleteConfirmation
        showModal={displayConfirmationModal}
        confirmModal={submitApproval}
        hideModal={hideConfirmationModal}
        type="approval"
        id={employee.id}
        ind={ind}
        message={approveMessage}
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

export default UpdatedEmployee;
