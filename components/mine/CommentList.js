import React from "react";
import { Modal, Button, Alert } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { CommentContext } from "../context/CommentContext";
import Comment from "./Comment";
import AddForm from "../AddForm";
import Pagination from "../Pagination";

const CommentList = () => {
  const { sortedComments } = useContext(CommentContext);

  const [showAlert, setShowAlert] = useState(false);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  //const handleShowAlert = () =>setShowAlert(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [commentsPerPage] = useState(2);

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
  }, [sortedComments]);

  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = sortedComments.slice(
    indexOfFirstComment,
    indexOfLastComment
  );
  const totalPagesNum = Math.ceil(sortedComments.length / commentsPerPage);

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Comments <b>Appoval</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <Button
              onClick={handleShow}
              className="btn btn-success"
              data-toggle="modal"
            >
              <i className="material-icons">&#xE147;</i>{" "}
              <span>Add New Comment</span>
            </Button>
          </div>
        </div>
      </div>

      <Alert show={showAlert} variant="success">
        Comments List Updated Succefully!
      </Alert>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Profile ID</th>
            <th>Artical name</th>
            <th>Comments</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentComments.map((comment) => {
            if (comment.approved != "True") {
              return (
                <tr key={comment.id}>
                  <Comment comment={comment} />
                </tr>
              );
            }
          })}
        </tbody>
      </table>

      <Pagination
        pages={totalPagesNum}
        setCurrentPage={setCurrentPage}
        currentEmployees={currentComments}
        sortedEmployees={sortedComments}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddForm />
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

export default CommentList;
