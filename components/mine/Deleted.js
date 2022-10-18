import { useContext, useState, useEffect } from "react";
import { DeletedContext } from "../context/DeletedContext";
import { Modal, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import EditForm from "../EditFrom";
import DeleteConfirmation from "../DeleteConfirmation";
import axios from "axios";
import RestoreConfirmation from "../RestoreConfirmation";

const Deleted = ({ deleted, ind }) => {
  const { deleteDeleted } = useContext(DeletedContext);

  const [displayDelConfirmationModal, setDisplayDelConfirmationModal] =
    useState(false);
  const [displayResConfirmationModal, setDisplayResConfirmationModal] =
    useState(false);
  const [deleteMessage, setDeleteMessage] = useState(null);
  const [userMessage, setUserMessage] = useState(null);

  const showDeleteModal = (type) => {
    setUserMessage(null);
    if (type == "delete") {
      setDeleteMessage(
        `Are you sure you want to delete the Approved User '${deleted.username}'?`
      );
      setDisplayResConfirmationModal(false);
      setDisplayDelConfirmationModal(true);
    } else {
      setDeleteMessage(
        `Are you sure you want to restore the Approved User '${deleted.username}'?`
      );
      setDisplayDelConfirmationModal(false);
      setDisplayResConfirmationModal(true);
    }
  };

  // Hide the modal
  const hideDelConfirmationModal = () => {
    setDisplayDelConfirmationModal(false);
  };
  const hideResConfirmationModal = () => {
    setDisplayResConfirmationModal(false);
  };
  // Handle delete and restore requests
  const delReq = () => {
    axios
      .delete(
        `https://medicare-democrate.herokuapp.com/api/v1/admin/permanent/delete/user/${deleted._id}`,
        {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzFkZjQwMmJjNDYwYmNkNTljZDAwNWUiLCJpZCI6MjEsImVtYWlsIjoibmFpcmFnYXJnOTk5QGdtYWlsLmNvbSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NTIyNTAxOSwiZXhwIjoxNjY3ODE3MDE5fQ.Aa5fgkmYm7O3MwdtdzbpEBxZ6oqFngtbv-6nKN1DWh8",
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  const resReq = () => {
    axios
      .put(
        `https://medicare-democrate.herokuapp.com/api/v1/admin/restore/deleted/user/${deleted._id}`,
        {},
        {
          headers: {
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzFkZjQwMmJjNDYwYmNkNTljZDAwNWUiLCJpZCI6MjEsImVtYWlsIjoibmFpcmFnYXJnOTk5QGdtYWlsLmNvbSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NTIyNTAxOSwiZXhwIjoxNjY3ODE3MDE5fQ.Aa5fgkmYm7O3MwdtdzbpEBxZ6oqFngtbv-6nKN1DWh8",
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  // Handle the actual deletion of the item
  const submitDelete = (type, ind, id) => {
    if (type == "delete") {
      setUserMessage(
        `The Approved User '${deleted.username}' was deleted successfully.`
      );
      deleteDeleted(id);
      setDisplayDelConfirmationModal(false);
      delReq();
    } else {
      setUserMessage(
        `The Approved User '${deleted.username}' was restored successfully.`
      );
      deleteDeleted(id);
      setDisplayResConfirmationModal(false);
      resReq();
    }
  };
  const date = new Date(deleted.createdAt).toDateString();

  useEffect(() => {}, [deleted]);

  return (
    <>
      <td>{ind + 1} </td>
      <td>{deleted.id} </td>
      <td>{deleted.reason}</td>
      <td>{date}</td>

      <td>
        <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Edit</Tooltip>}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="blue"
            className="bi bi-arrow-clockwise"
            onClick={() => showDeleteModal("restore")}
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
            />
            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
          </svg>
        </OverlayTrigger>
        <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Delete</Tooltip>}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="18"
            fill="red"
            className="bi bi-trash3"
            onClick={() => showDeleteModal("delete")}
            viewBox="0 0 16 16"
          >
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
          </svg>
        </OverlayTrigger>
      </td>
      <DeleteConfirmation
        showModal={displayDelConfirmationModal}
        confirmModal={submitDelete}
        hideModal={hideDelConfirmationModal}
        id={deleted.id}
        ind={ind}
        type="delete"
        message={deleteMessage}
      />
      <RestoreConfirmation
        showModal={displayResConfirmationModal}
        confirmModal={submitDelete}
        hideModal={hideResConfirmationModal}
        id={deleted.id}
        type="restore"
        ind={ind}
        message={deleteMessage}
      />
    </>
  );
};

export default Deleted;
