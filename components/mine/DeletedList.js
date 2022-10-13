import React from "react";
import { Modal, Button, Alert } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { DeletedContext } from "../context/DeletedContext";
import Deleted from "./Deleted";
import AddForm from "../AddForm";
import Pagination from "../Pagination";

const DeletedList = () => {
  const { sortedDeleteds } = useContext(DeletedContext);

  const [showAlert, setShowAlert] = useState(false);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  //const handleShowAlert = () =>setShowAlert(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [deletedsPerPage] = useState(2);

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
  }, [sortedDeleteds]);

  const indexOfLastDeleted = currentPage * deletedsPerPage;
  const indexOfFirstDeleted = indexOfLastDeleted - deletedsPerPage;
  const currentDeleteds = sortedDeleteds.slice(
    indexOfFirstDeleted,
    indexOfLastDeleted
  );
  const totalPagesNum = Math.ceil(sortedDeleteds.length / deletedsPerPage);

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage <b>Deleted</b>
            </h2>
          </div>
        </div>
      </div>

      <Alert show={showAlert} variant="success">
        Deleteds List Updated Succefully!
      </Alert>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Profile ID</th>
            <th>Reason</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentDeleteds.map((deleted, index) => (
            <tr key={deleted.id}>
              <Deleted ind={index} deleted={deleted} />
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        pages={totalPagesNum}
        setCurrentPage={setCurrentPage}
        currentEmployees={currentDeleteds}
        sortedEmployees={sortedDeleteds}
      />
    </>
  );
};

export default DeletedList;
