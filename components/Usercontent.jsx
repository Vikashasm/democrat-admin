import React from "react";
import { useState, useContext, useEffect } from "react";
import { EmployeeContext } from "../components/context/Employeecontext";
import { Row, Col, Container, Card, Table, Alert } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
//import { faTrash } from "@fontawesome/free-solid-svg-icons";
import DeleteConfirmation from "./DeleteConfirmation";

import axios from "axios";
const Usercontent = () => {
  const { sortedUsers, deleteSortedUsers } = useContext(EmployeeContext);

  console.log("usersorted", sortedUsers);

  // Set up some additional local state
  //const [type, setType] = useState(null);
  const [id, setId] = useState(null);
  const [type, settype] = useState(null);
  const [ind, setind] = useState(null);
  const [userID, setuserID] = useState(null);
  const [displayConfirmationModal, setDisplayConfirmationModal] =
    useState(false);
  const [deleteMessage, setDeleteMessage] = useState(null);
  const [userMessage, setUserMessage] = useState(null);

  // Handle the displaying of the modal based on type and id
  const showDeleteModal = (type, id, ind, userid) => {
    settype(type);
    setId(id);
    setuserID(userid);
    setind(ind);
    setUserMessage(null);
    setDeleteMessage(
      `Are you sure you want to delete the Approved User '${
        //fruits.find((x) => x.id === id).name
        sortedUsers[ind].username
      }'?`
    );

    setDisplayConfirmationModal(true);
  };

  // Hide the modal
  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
  };

  // Handle the actual deletion of the item
  const submitDelete = (type, ind, id) => {
    setUserMessage(
      `The Approved User '${sortedUsers[ind].username}' was deleted successfully.`
    );
    deleteSortedUsers(userID);
    setDisplayConfirmationModal(false);
  };
  useEffect(() => {}, [sortedUsers]);
  return (
    <Container className="mt-5 ">
      <Row>
        <Col className="width_left_margin" md={{ span: 10, offset: 1 }}>
          <Card className="mt-2">
            <Card.Header className="card_header">Approved User</Card.Header>
            <Card.Body>
              {
                //fruitMessage && <Alert variant="success">{fruitMessage}</Alert>
              }
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Profile ID</th>
                    <th>Mobile Number</th>
                    <th>DOB</th>
                    <th>Gender</th>
                    <th>Skin Condition</th>
                    <th>Country</th>
                    <th>Last Login</th>
                    <th style={{ width: "120px" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedUsers.map((user, ind) => {
                    return (
                      <tr key={user._id}>
                        <td>{ind + 1}</td>
                        <td>{user.username}</td>
                        <td>{user.id}</td>
                        <td>{user.phone}</td>
                        <td>{user.dateOfBirth}</td>
                        <td>{user.gender ? user.gender : "NA"}</td>
                        <td>{user.skinCondition}</td>
                        <td>{user.country}</td>
                        <td>{user.Last}</td>
                        <td className="text-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="18"
                            fill="red"
                            className="bi bi-trash3"
                            onClick={() =>
                              showDeleteModal("user", user.id, ind, user._id)
                            }
                            viewBox="0 0 16 16"
                          >
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                          </svg>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <DeleteConfirmation
        showModal={displayConfirmationModal}
        confirmModal={submitDelete}
        hideModal={hideConfirmationModal}
        type={type}
        id={id}
        ind={ind}
        message={deleteMessage}
      />
    </Container>
  );
};

export default Usercontent;
