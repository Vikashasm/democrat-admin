import { useContext, useState, useEffect, useRef } from "react";
import { ProductContext } from "../context/ProductContext";
import { Modal, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import EditForm from "../EditFrom";
import Image from "next/image";

const Productt = ({ product }) => {
  const { deleteProduct, approveProduct } = useContext(ProductContext);
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
  }, [product]);
  console.log(imgVisible);
  return (
    <>
      <td>{product.companyName} </td>
      <td>{product.productName}</td>
      <td>{product.category}</td>
      <td>{product.productForm}</td>
      <td>
        <img
          ref={imgRef}
          src={product.productImagePath}
          width={40}
          height={40}
          onClick={() => setimgVisible(true)}
        />
      </td>

      <td>
        <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Read</Tooltip>}>
          <Button
            variant="primary"
            style={{ width: "80%" }}
            onClick={() => approveProduct(product._id)}
          >
            Read
          </Button>
        </OverlayTrigger>
      </td>
      {
        //<Modal show={show} onHide={handleClose}>
        //  <Modal.Header closeButton>
        //    <Modal.Title>Edit Product</Modal.Title>
        //  </Modal.Header>
        //  <Modal.Body>
        //    <EditForm theProduct={product} />
        //  </Modal.Body>
        //  <Modal.Footer>
        //    <Button variant="secondary" onClick={handleClose}>
        //      Close Button
        //    </Button>
        //  </Modal.Footer>
        //</Modal>
      }
      <div
        style={{
          display: imgVisible ? "block" : "none",
          position: "absolute",
          width: "100vw",
          height: "100vh",
          zIndex: "30",
          top: "0",
          left: "0",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      >
        <img
          ref={imgRef}
          src={product.productImagePath}
          width={600}
          height={500}
          style={{
            marginLeft: "40%",
            marginTop: "10%",
          }}
        />
      </div>
    </>
  );
};

export default Productt;
