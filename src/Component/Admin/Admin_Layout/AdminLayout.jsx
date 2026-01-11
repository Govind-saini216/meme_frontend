import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../Admin_Layout/AdminHeader.jsx";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* SIDEBAR */}
      <AdminHeader />

      {/* RIGHT SIDE CONTENT */}
      <div className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
