import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

function Dashboardcontent() {
  return (
    <>
      <div className="dashboard_content">
        <div className="row">
          <div className=" box_one">
            <h1 className="heading">Totals Users</h1>
            <h5 className="sub_heading">1951</h5>
          </div>
          <div className=" box_one">
            <h1 className="heading">Incomplete USers</h1>
            <h5 className="sub_heading">33</h5>
          </div>
          <div className="box_one">
            <h1 className="heading">Changed made by Users</h1>
            <h5 className="sub_heading">35</h5>
          </div>

          <div className=" box_one">
            <h1 className="heading">Manually added Products</h1>
            <h5 className="sub_heading">0</h5>
          </div>
          <div className=" box_one">
            <h1 className="heading">Comments Approval</h1>
            <h5 className="sub_heading">3</h5>
          </div>
          <div className=" box_one">
            <h1 className="heading">Contact reuests</h1>
            <h5 className="sub_heading">6</h5>
          </div>
          <div className=" box_one">
            <h1 className="heading"> Delete Users</h1>
            <h5 className="sub_heading">2</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboardcontent;
