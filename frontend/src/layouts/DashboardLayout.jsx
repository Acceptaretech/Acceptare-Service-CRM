import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      
      {/* Sidebar */}
      <Sidebar />

      {/* Right Content */}
      <div style={{ flex: 1, padding: "20px", background: "#f5f6fa" }}>
        <Outlet />
      </div>

    </div>
  );
};

export default DashboardLayout;