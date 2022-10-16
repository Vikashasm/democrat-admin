import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { useQuery } from "react-query";
import { EmployeeContext } from "./context/Employeecontext";
import { ProductContext } from "./context/ProductContext";
import { ContactContext } from "./context/ContactContext";
import { DeletedContext } from "./context/DeletedContext";

function Dashboardcontent() {
  const { sortedIncompleteUser, sortedUsers, sortedUpdatedUsers } =
    useContext(EmployeeContext);
  const { sortedProducts } = useContext(ProductContext);
  const { sortedDeleteds } = useContext(DeletedContext);
  const { sortedContacts } = useContext(ContactContext);
  return (
    <>
      <div className="dashboard_content">
        <div className="row">
          <Link href="/users">
            <div className=" box_one">
              <h1 className="heading">Totals Users</h1>
              <h5 className="sub_heading">{sortedUsers.length}</h5>
            </div>
          </Link>
          <Link href="/totaluser">
            <div className=" box_one">
              <h1 className="heading">Incomplete USers</h1>
              <h5 className="sub_heading">{sortedIncompleteUser.length}</h5>
            </div>
          </Link>
          <Link href="/updateduser">
            <div className="box_one">
              <h1 className="heading">Changed made by Users</h1>
              <h5 className="sub_heading">{sortedUpdatedUsers.length}</h5>
            </div>
          </Link>
          <Link href="/products">
            <div className=" box_one">
              <h1 className="heading">Manually added Products</h1>
              <h5 className="sub_heading">{sortedProducts.length}</h5>
            </div>
          </Link>
          <Link href="/comments">
            <div className=" box_one">
              <h1 className="heading">Comments Approval</h1>
              <h5 className="sub_heading">2</h5>
            </div>
          </Link>
          <Link href="/contact">
            <div className=" box_one">
              <h1 className="heading">Contact reuests</h1>
              <h5 className="sub_heading">{sortedContacts.length}</h5>
            </div>
          </Link>
          <Link href="/deleteusers">
            <div className=" box_one">
              <h1 className="heading"> Delete Users</h1>
              <h5 className="sub_heading">{sortedDeleteds.length} </h5>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Dashboardcontent;
