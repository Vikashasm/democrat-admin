import React from "react";
import { useState } from "react";
import { Row, Col, Container, Card, Table, Alert } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
// import { faTrash } from "@fontawesome/free-solid-svg-icons";
import DeleteConfirmation from "./DeleteConfirmation";

function Usercontent() {
  // Set up a list of fruits and vegetables
  const [fruits, setFruits] = useState([
    {
      id: 1,
      name: "Mohini Jain",
      Profile: "xyz",
      Mobile: 1234,
      gender: "male",
      Dob: "11.23.03",
      Skin: "Psoriasis",
      Country: "India",
      Last: "21/04/2021",
    },
    {
      id: 2,
      name: "Mayank Agarwal",
      Profile: "xyz",
      Mobile: 1234,
      gender: "male",
      Dob: "11.23.03",
      Skin: "Psoriasis",
      Country: "India",
      Last: "21/04/2021",
    },
    {
      id: 3,
      name: "Mohini Jain",
      Profile: "xyz",
      Mobile: 1234,
      gender: "male",
      Dob: "11.23.03",
      Skin: "Psoriasis",
      Country: "India",
      Last: "21/04/2021",
    },
    {
      id: 4,
      name: "Mayank Agarwal",
      Profile: "xyz",
      Mobile: 1234,
      gender: "male",
      Dob: "11.23.03",
      Skin: "Psoriasis",
      Country: "India",
      Last: "21/04/2021",
    },
    {
      id: 5,
      name: "Mohini Jain",
      Profile: "xyz",
      Mobile: 1234,
      gender: "male",
      Dob: "11.23.03",
      Skin: "Psoriasis",
      Country: "India",
      Last: "21/04/2021",
    },
  ]);
  // const [vegetables, setVegetables] = useState([
  //   {
  //     id: 1,
  //     name: "Lettuce",
  //     Profile: "xyz",
  //     Mobile: 1234,
  //     gender: "male",
  //     Dob: "11.23.03",
  //   },
  //   {
  //     id: 2,
  //     name: "Carrot",
  //     Profile: "xyz",
  //     Mobile: 1234,
  //     gender: "male",
  //     Dob: "11.23.03",
  //   },
  //   {
  //     id: 3,
  //     name: "Onion",
  //     Profile: "xyz",
  //     Mobile: 1234,
  //     gender: "male",
  //     Dob: "11.23.03",
  //   },
  //   {
  //     id: 4,
  //     name: "Brocolli",
  //     Profile: "xyz",
  //     Mobile: 1234,
  //     gender: "male",
  //     Dob: "11.23.03",
  //   },
  //   {
  //     id: 5,
  //     name: "Mushroom",
  //     Profile: "xyz",
  //     Mobile: 1234,
  //     gender: "male",
  //     Dob: "11.23.03",
  //   },
  // ]);

  // Set up some additional local state
  const [type, setType] = useState(null);
  const [id, setId] = useState(null);
  const [displayConfirmationModal, setDisplayConfirmationModal] =
    useState(false);
  const [deleteMessage, setDeleteMessage] = useState(null);
  const [fruitMessage, setFruitMessage] = useState(null);
  const [vegetableMessage, setVegetableMessage] = useState(null);

  // Handle the displaying of the modal based on type and id
  const showDeleteModal = (type, id) => {
    setType(type);
    setId(id);
    setFruitMessage(null);
    setVegetableMessage(null);

    if (type === "fruit") {
      setDeleteMessage(
        `Are you sure you want to delete the Approved User '${
          fruits.find((x) => x.id === id).name
        }'?`
      );
    } else if (type === "vegetable") {
      setDeleteMessage(
        `Are you sure you want to delete the vegetable '${
          vegetables.find((x) => x.id === id).name
        }'?`
      );
    }

    setDisplayConfirmationModal(true);
  };

  // Hide the modal
  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
  };

  // Handle the actual deletion of the item
  const submitDelete = (type, id) => {
    if (type === "fruit") {
      setFruitMessage(
        `The Approved User '${
          fruits.find((x) => x.id === id).name
        }' was deleted successfully.`
      );
      setFruits(fruits.filter((fruit) => fruit.id !== id));
    } else if (type === "vegetable") {
      setVegetableMessage(
        `The vegetable '${
          vegetables.find((x) => x.id === id).name
        }' was deleted successfully.`
      );
      setVegetables(vegetables.filter((vegetable) => vegetable.id !== id));
    }
    setDisplayConfirmationModal(false);
  };

  return (
    <Container className="mt-5 ">
      <Row>
        <Col className="width_left_margin" md={{ span: 10, offset: 1 }}>
          <Card className="mt-2">
            <Card.Header className="card_header">Approved User</Card.Header>
            <Card.Body>
              {fruitMessage && <Alert variant="success">{fruitMessage}</Alert>}
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Profile ID</th>
                    <th>Mobile Number</th>
                    <th>Gender</th>
                    <th>DOB</th>
                    <th>Skin Condition</th>
                    <th>Country</th>
                    <th>Last Login</th>
                    <th style={{ width: "120px" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {fruits.map((fruit) => {
                    return (
                      <tr key={fruit.id}>
                        <td>{fruit.id}</td>
                        <td>{fruit.name}</td>
                        <td>{fruit.Profile}</td>
                        <td>{fruit.Mobile}</td>
                        <td>{fruit.gender}</td>
                        <td>{fruit.Dob}</td>
                        <td>{fruit.Skin}</td>
                        <td>{fruit.Country}</td>
                        <td>{fruit.Last}</td>

                        <td className="text-center">
                          <span
                            className="text-danger cursor"
                            onClick={() => showDeleteModal("fruit", fruit.id)}
                          >
                            Delete
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
          {/* <Card className="mt-2">
            <Card.Header className="card_header">Vegetables</Card.Header>
            <Card.Body>
              {vegetableMessage && (
                <Alert variant="success">{vegetableMessage}</Alert>
              )}
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Profile ID</th>
                    <th>Mobile Number</th>
                    <th>Gender</th>
                    <th>DOB</th>
                    <th style={{ width: "120px" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {vegetables.map((vegetable) => {
                    return (
                      <tr key={vegetable.id}>
                        <td>{vegetable.id}</td>
                        <td>{vegetable.name}</td>
                        <td>{vegetable.Profile}</td>
                        <td>{vegetable.Mobile}</td>
                        <td>{vegetable.gender}</td>
                        <td>{vegetable.Dob}</td>

                        <td className="text-center">
                          <span
                            className="text-danger cursor"
                            onClick={() =>
                              showDeleteModal("vegetable", vegetable.id)
                            }
                          >
                            Delete
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Card.Body>
          </Card> */}
        </Col>
      </Row>
      <DeleteConfirmation
        showModal={displayConfirmationModal}
        confirmModal={submitDelete}
        hideModal={hideConfirmationModal}
        type={type}
        id={id}
        message={deleteMessage}
      />
    </Container>
  );
}

export default Usercontent;
