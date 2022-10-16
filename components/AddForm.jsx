import { Form, Button } from "react-bootstrap";

import { ProductContext } from "../components/context/ProductContext";
import { useContext, useState } from "react";
import axios from "axios";
const AddForm = () => {
  const { addProduct } = useContext(ProductContext);
  const [Imgg, setImgg] = useState("");
  const [newProduct, setNewProduct] = useState({
    productName: "asd ",
    companyName: "sf",
    productForm: "tablet",
    productImage: "1.png",
  });

  const formData = new FormData();
  const onInputFile = (e) => {
    e.preventDefault();
    setImgg(e.target.files[0]);
    formData.append("file", e.target.files[0]);
  };
  const onInputChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", Imgg);

    addProduct(newProduct, formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group style={{ marginBottom: "2%" }}>
        <Form.Control
          type="text"
          placeholder="Product Name"
          name="productName"
          value={newProduct.productName}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group style={{ marginBottom: "2%" }}>
        <Form.Control
          type="text"
          placeholder="Company Name"
          name="companyName"
          value={newProduct.companyName}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group style={{ marginBottom: "2%" }}>
        <Form.Control
          type="text"
          placeholder="product Form"
          name="productForm"
          value={newProduct.productForm}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group style={{ marginBottom: "4%" }}>
        <Form.Control
          type="file"
          placeholder="Product Image"
          name="productImage"
          accept="image/*"
          onChange={(e) => onInputFile(e)}
          required
        />
      </Form.Group>

      <Button variant="success" type="submit" block>
        Add New Product
      </Button>
    </Form>
  );
};

export default AddForm;
