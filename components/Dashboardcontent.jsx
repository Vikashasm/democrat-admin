import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useQuery } from "react-query";

function Dashboardcontent() {
  //const { isLoading, error, data, isFetching } = useQuery("deshData", () => )
  //axios
  //  .get("https://api.github.com/repos/tannerlinsley/react-query")
  //  .then((res) => res.data)
  //);

  //if (isLoading) return "Loading...";
  //
  //if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div className="dashboard_content">
        <div className="row">
          <Link href="/users">
            <div className=" box_one">
              <h1 className="heading">Totals Users</h1>
              <h5 className="sub_heading">1951</h5>
            </div>
          </Link>
          <Link href="/totaluser">
            <div className=" box_one">
              <h1 className="heading">Incomplete USers</h1>
              <h5 className="sub_heading">33</h5>
            </div>
          </Link>
          <Link href="/updateduser">
            <div className="box_one">
              <h1 className="heading">Changed made by Users</h1>
              <h5 className="sub_heading">35</h5>
            </div>
          </Link>
          <Link href="/products">
            <div className=" box_one">
              <h1 className="heading">Manually added Products</h1>
              <h5 className="sub_heading">0</h5>
            </div>
          </Link>
          <Link href="/comments">
            <div className=" box_one">
              <h1 className="heading">Comments Approval</h1>
              <h5 className="sub_heading">3</h5>
            </div>
          </Link>
          <Link href="/contact">
            <div className=" box_one">
              <h1 className="heading">Contact reuests</h1>
              <h5 className="sub_heading">6</h5>
            </div>
          </Link>
          <Link href="/deleteusers">
            <div className=" box_one">
              <h1 className="heading"> Delete Users</h1>
              <h5 className="sub_heading">2</h5>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Dashboardcontent;
