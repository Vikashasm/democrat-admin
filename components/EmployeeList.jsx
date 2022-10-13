import { Modal, Button, Alert } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { EmployeeContext } from "../components/context/Employeecontext";
import Employee from "./Employee";
import AddForm from "./AddForm";
import Pagination from "./Pagination";

const EmployeeList = () => {
  const { sortedIncompleteUser, deleteSortedInUsers } =
    useContext(EmployeeContext);

  const [showAlert, setShowAlert] = useState(false);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  //const handleShowAlert = () =>setShowAlert(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(2);

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
  }, [sortedIncompleteUser]);

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = sortedIncompleteUser.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );
  const totalPagesNum = Math.ceil(
    sortedIncompleteUser.length / employeesPerPage
  );

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Incomplete <b>Users</b>
            </h2>
          </div>
          {
            //<div className="col-sm-6">
            //  <Button
            //    onClick={handleShow}
            //    className="btn btn-success"
            //    data-toggle="modal"
            //  >
            //    <i className="material-icons">&#xE147;</i>{" "}
            //    <span>Add New Employee</span>
            //  </Button>
            //</div>
          }
        </div>
      </div>

      {
        //  <Alert show={showAlert} variant="success">
        //  Emlployee List Updated Succefully!
        //</Alert>
      }

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((employee, ind) => (
            <tr key={employee.id}>
              <Employee employee={employee} ind={ind} />
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        pages={totalPagesNum}
        setCurrentPage={setCurrentPage}
        currentEmployees={currentEmployees}
        sortedEmployees={sortedIncompleteUser}
      />
      {
        //     <Modal show={show} onHide={handleClose}>
        //       <Modal.Header closeButton>
        //         <Modal.Title>Add Employee</Modal.Title>
        //       </Modal.Header>
        //       <Modal.Body>
        //         <AddForm />
        //       </Modal.Body>
        //       <Modal.Footer>
        //         <Button variant="secondary" onClick={handleClose}>
        //           Close Button
        //         </Button>
        //       </Modal.Footer>
        //     </Modal>
      }
    </>
  );
};

export default EmployeeList;
