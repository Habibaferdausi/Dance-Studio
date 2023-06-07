import React from "react";
import SideNav from "../DashBoard Page/SideNav";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="relative min-h-screen md:flex">
      <SideNav />
      <div className="flex-1  md:ml-11">
        <div className="p-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
