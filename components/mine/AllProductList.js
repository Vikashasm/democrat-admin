import React from "react";
import { Modal, Button, Alert } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import Productt from "./Productt";
import AddForm from "../AddForm";
import Pagination from "../Pagination";

const ProductList = () => {
  const { sortedProducts } = useContext(ProductContext);
  const [showAlert, setShowAlert] = useState(false);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  //const handleShowAlert = () =>setShowAlert(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

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
  }, [sortedProducts]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPagesNum = Math.ceil(sortedProducts.length / productsPerPage);

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage <b>Products</b>
            </h2>
          </div>

          <div className="col-sm-6">
            <Button
              onClick={handleShow}
              className="btn btn-success"
              data-toggle="modal"
              style={{
                textAlign: "center",
              }}
            >
              <i className="material-icons">&#xE147;</i>
              <span style={{ marginTop: "7px" }}>Add New Product</span>
            </Button>
          </div>
        </div>
      </div>

      <Alert show={showAlert} variant="success">
        Products List Updated Succefully!
      </Alert>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Brand name</th>
            <th>Product name</th>
            <th>Product category</th>
            <th>Product form</th>
            <th>Photos</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product) => (
            <tr key={product.id}>
              <Productt product={product} />
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        pages={totalPagesNum}
        setCurrentPage={setCurrentPage}
        currentEmployees={currentProducts}
        sortedEmployees={sortedProducts}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
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

export default ProductList;
