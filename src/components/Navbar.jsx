import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedRole = storedUser?.role || localStorage.getItem("role");
    setRole(storedRole);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-blue-700 text-white">
      <h1 className="text-xl font-bold">Event Management</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        {!role && <Link to="/login">Login</Link>}
        {!role && <Link to="/register">Register</Link>}
        {role === "admin" && <Link to="/admin-dashboard">Admin</Link>}
        {role === "vendor" && <Link to="/vendor-dashboard">Vendor</Link>}
        {role === "user" && <Link to="/user-dashboard">User</Link>}
        {role && <button onClick={handleLogout}>Logout</button>}
      </div>
    </nav>
  );
}
