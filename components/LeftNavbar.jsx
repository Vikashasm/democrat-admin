import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import {
  Cross,
  Dashboard,
  Toggle,
  cross,
  Users,
  IncompleteUsers,
  Changesusers,
  Addproduct,
  Comments,
  Delete,
  Contactrequest,
  Logout,
  toggle,
} from "./common/Iconx";

import { useRouter } from "next/router";

const LeftNavbar = () => {
  const [sideBarActive, setSideBarActive] = useState(false);
  const router = useRouter();

  return (
    <>
      {/* <div className={`admin  ${sideBarActive ? "admin-active":""} `}>
      <div className= "admin_child pt_3 pb_2">
        <h2 className='pl_2 pr_2'>
          Admin panel

        </h2>

      </div>
      <div className="pt_3 pb_2 pl_2 pr_2">
        <ul className='admin_list'>
          <li className='Dashboard_text pb_2'>
        <Dashboard/>
        <Link href="#"><a className='icons' > Dashboard</a>
</Link>
          </li>
          <li className='Dashboard_text pb_2'>
            <Users/>
            <a className='icons' href='#'>Users</a>
          </li>
          <li className='Dashboard_text pb_2'>
            <IncompleteUsers/>
            <a className='icons' href='#'> Incomplete Users</a>
          </li>
          <li className='Dashboard_text pb_2'>
            <Changesusers/>
            <a className='icons' href='#'>Changes made by Users</a>
          </li>
          <li className='Dashboard_text pb_2'>
             <Addproduct/>
            <a className='icons' href='#'>Manually added Products</a>
          </li>
           <li className='Dashboard_text pb_2'>
             <Comments/>
            <a className='icons' href='#'>Comments approval</a>
          </li>
           <li className='Dashboard_text pb_2'>
             <Contactrequest/>
            <a className='icons' href='#'>Contact Requests</a>
          </li> 
          <li className='Dashboard_text pb_2'>
             <Delete/>
            <a className='icons' href='#'>Delete Users</a>
          </li>
           <li className='Dashboard_text pb_2'>
             <Logout/>
            <a className='icons' href='#'>Logout</a>
          </li>
        </ul>

      </div>
        
    </div>
    <span className={`toggle ${sideBarActive ?"toggle-white":""} `} onClick={() => setSideBarActive(!sideBarActive)}>

{ sideBarActive ? <Cross/>: <Toggle/>}

    </span> */}
      <div className="admin">
        <div className="admin_child pt_3 pb_2">
          <h2 className="pl_2 pr_2">Admin panel</h2>
        </div>
        <div className="pt_3 pb_2  admin_wrapper">
          <ul className="admin_list">
            <Link href="/dashboard">
              <li
                className={`Dashboard_text pb_2 ${
                  router.pathname == "/dashboard" ? "active" : ""
                }`}
              >
                <Dashboard />

                <span className="text_heading">Dashboard</span>
              </li>
            </Link>
            <Link href="/users">
              <li
                className={`Dashboard_text pb_2 ${
                  router.pathname == "/users" ? "active" : ""
                }`}
              >
                <Users />
                <span className="text_heading">user</span>
              </li>
            </Link>
            <Link href="/totaluser">
              <li
                className={`Dashboard_text pb_2 ${
                  router.pathname == "/totaluser" ? "active" : ""
                }`}
              >
                <IncompleteUsers />
                <span className="text_heading">Incomplete Users</span>
              </li>
            </Link>
            <Link href="/totaluser">
              <li
                className={`Dashboard_text pb_2 ${
                  router.pathname == "/totaluser" ? "active" : ""
                }`}
              >
                <Changesusers />
                <span className="text_heading">Changes made by Users</span>
              </li>
            </Link>
            <Link href="/Products">
              <li
                className={`Dashboard_text pb_2 ${
                  router.pathname == "/Products" ? "active" : ""
                }`}
              >
                <Addproduct />
                <span className="text_heading">Manage Product</span>
              </li>
            </Link>
            <Link href="/Products">
              <li
                className={`Dashboard_text pb_2 ${
                  router.pathname == "/Products" ? "active" : ""
                }`}
              >
                <Addproduct />
                <span className="text_heading">Manually added Products</span>
              </li>
            </Link>
            <Link href="/Comments">
              <li
                className={`Dashboard_text pb_2 ${
                  router.pathname == "/Comments" ? "active" : ""
                }`}
              >
                <Comments />
                <span className="text_heading">Comments approval</span>
              </li>
            </Link>
            <Link href="/Contact">
              <li
                className={`Dashboard_text pb_2 ${
                  router.pathname == "/Contact" ? "active" : ""
                }`}
              >
                <Contactrequest />
                <span className="text_heading">Contact Requests</span>
              </li>
            </Link>
            <Link href="/Deleteusers">
              <li
                className={`Dashboard_text pb_2 ${
                  router.pathname == "/Deleteusers" ? "active" : ""
                }`}
              >
                <Delete />
                <span className="text_heading">Delete Users</span>
              </li>
            </Link>
            <Link href="/Logout">
              <li
                className={`Dashboard_text pb_2 ${
                  router.pathname == "/Logout" ? "active" : ""
                }`}
              >
                <Logout />
                <span className="text_heading">Logout</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LeftNavbar;
