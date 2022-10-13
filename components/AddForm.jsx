import { Form, Button } from "react-bootstrap";

import { ProductContext } from "../components/context/ProductContext";
import { useContext, useState } from "react";

const AddForm = () => {
  const { addProduct } = useContext(ProductContext);
  const [Imgg, setImgg] = useState("");
  const [newProduct, setNewProduct] = useState({
    productName: "",
    companyName: "",
    productForm: "",
  });
  const onInputFile = (e) => {
    e.preventDefault();
    console.log(e.target.files);
    setImgg(e.target.files[0]);
  };
  const onInputChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  //const { name, email, phone, address } = newEmployee;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newProduct);
    addProduct(
      newProduct.productName,
      newProduct.companyName,
      newProduct.productForm,
      Imgg
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Product Name"
          name="productName"
          value={newProduct.productName}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Company Name"
          name="companyName"
          value={newProduct.companyName}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="product Form"
          name="productForm"
          value={newProduct.productForm}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group>
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
