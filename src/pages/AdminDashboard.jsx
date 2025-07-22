import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const menuItems = [
    { title: "Add/Update Memberships", path: "/admin/memberships" },
    { title: "Add/Update User, Vendor", path: "/admin/manage-users" },
    { title: "Users Management", path: "/admin/users" },
    { title: "Vendors Management", path: "/admin/vendors" }
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Maintenance Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {menuItems.map((item) => (
          <div
            key={item.title}
            onClick={() => navigate(item.path)}
            className="cursor-pointer p-4 bg-white shadow hover:shadow-md rounded-xl border hover:border-blue-500 transition"
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
