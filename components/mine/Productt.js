import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import { Modal, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import EditForm from "../EditFrom";

const Productt = ({ product }) => {
  const { deleteProduct } = useContext(ProductContext);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    handleClose();
  }, [product]);

  return (
    <>
      <td>{product.brand} </td>
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td>{product.form}</td>
      <td>{product.pic}</td>

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
            onClick={() => deleteProduct(product.id)}
            className="btn text-danger btn-act"
            data-toggle="modal"
          >
            <i className="material-icons">&#xE872;</i>
          </button>
        </OverlayTrigger>
      </td>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm theProduct={product} />
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

export default Productt;
