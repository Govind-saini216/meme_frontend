import { Route } from "react-router-dom";
import AdminLayout from "../Admin_Layout/AdminLayout";
import Dashboard from "../Pages/Dashboard";
import AdminLogin from "../Pages/AdminLogin";
import Users from "../Pages/Users";
import Analytics from "../Pages/Analytics";
import Settings from "../Pages/Settings";

const AdminRoutes = () => (
  <>
    {/* 🔐 ADMIN LOGIN */}
    <Route path="/admin" element={<AdminLogin />} />

    {/* 🔒 ADMIN PANEL (AFTER LOGIN) */}
    <Route path="/admin" element={<AdminLayout />}>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="users" element={<Users />} />
      <Route path="analytics" element={<Analytics />} />
      <Route path="settings" element={<Settings />} />
      {/* aage users, analytics yahin aayenge */}
    </Route>
  </>
);

export default AdminRoutes;
