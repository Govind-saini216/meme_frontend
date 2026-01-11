import { Routes, Route, Navigate } from "react-router-dom";
import UserRoutes from "./Component/User/Routes/UserRoutes.jsx";
import AdminRoutes from "./Component/Admin/Routes/AdminRoutes.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/all" replace />} />
      {UserRoutes()}
      {AdminRoutes()}
    </Routes>
  );
}
