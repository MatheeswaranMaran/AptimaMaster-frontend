import React from "react";
import "./Common.css";
import { Link } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { FaBook, FaUserAlt } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";

const SideBar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to={"/admin/dashboard"}>
            <div className="icon">
              <TiHome />
            </div>
            <span>Home</span>
          </Link>
        </li>

        <li>
          <Link to={"/admin/course"}>
            <div className="icon">
              <FaBook />
            </div>
            <span>Courses</span>
          </Link>
        </li>

        <li>
          <Link to={"/admin/users"}>
            <div className="icon">
              <FaUserAlt />
            </div>
            <span>Users</span>
          </Link>
        </li>

        <li>
          <Link to={"/account"}>
            <div className="icon">
              <MdOutlineLogout />
            </div>
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
