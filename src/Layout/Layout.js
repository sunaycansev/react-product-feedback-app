import React from "react";
import SideBar from "../Components/SideBar";
function Layout({ children }) {
  return (
    <div className="container flex justify-between  mx-auto p-10 mt-10">
      <div className="sidebar mr-10">
        <SideBar />
      </div>
      <div className="main-content  w-full">{children}</div>
    </div>
  );
}

export default Layout;
