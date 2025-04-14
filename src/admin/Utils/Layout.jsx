import React from "react";
import SideBar from './SideBar';
import "./Common.css";

const Layout = ({children}) => {
  return (
    <div className="dashboard-admin">
      <SideBar />
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
