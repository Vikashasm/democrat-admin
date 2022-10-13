import React from "react";
import { Modal, Button } from "react-bootstrap";

const RestoreConfirmation = ({
  showModal,
  hideModal,
  confirmModal,
  id,
  message,
  type,
  ind,
}) => {
  return (
    <Modal show={showModal} onHide={hideModal}>
      <Modal.Header closeButton>
        <Modal.Title>Restore Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="alert alert-primary">{message}</div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="default" onClick={hideModal}>
          Cancel
        </Button>
        <Button variant="primary" onClick={() => confirmModal(type, ind, id)}>
          Restore
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RestoreConfirmation;
