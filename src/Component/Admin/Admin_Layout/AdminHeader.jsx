import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUsers,
  FaChartLine,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const AdminHeader = () => {
  const [open, setOpen] = useState(true);

  const menu = [
    { name: "Dashboard", path: "/admin/dashboard", icon: <FaHome /> },
    { name: "Users", path: "/admin/users", icon: <FaUsers /> },
    { name: "Analytics", path: "/admin/analytics", icon: <FaChartLine /> },
    { name: "Settings", path: "/admin/settings", icon: <FaCog /> },
  ];

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear(); // optional

    navigate("/admin");
  }

  return (
    <aside
      className={`h-screen bg-gradient-to-b from-[#0f2027] via-[#203a43] to-[#2c5364]
      text-white transition-all duration-300 ${open ? "w-64" : "w-20"
        }`}
    >
      {/* TOP */}
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        {open && <h1 className="text-xl font-bold">ADMIN</h1>}
        <button
          onClick={() => setOpen(!open)}
          className="text-xl hover:text-cyan-400"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MENU */}
      <nav className="mt-6 space-y-2 px-2">
        {menu.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 p-3 rounded-lg cursor-pointer transition
              ${isActive
                ? "bg-cyan-500/20 text-cyan-300"
                : "hover:bg-white/10"
              }`
            }
          >
            <span className="text-lg text-cyan-400">{item.icon}</span>
            {open && <span>{item.name}</span>}
          </NavLink>
        ))}
      </nav>

      {/* LOGOUT */}
      <div className="absolute bottom-5  px-2">
        <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-red-600/20 cursor-pointer">
          <FaSignOutAlt className="text-red-400" />
          {open && <span onClick={logout} >Logout</span>}
        </div>
      </div>
    </aside>
  );
};

export default AdminHeader;
