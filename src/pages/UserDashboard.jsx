import React from "react";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">User Dashboard</h1>
      <div className="grid grid-cols-2 gap-6">
        <Link to="/user/vendors" className="btn">View Vendors</Link>
        <Link to="/user/cart" className="btn">Cart</Link>
        <Link to="/user/guest" className="btn">Guest List</Link>
        <Link to="/user/order-status" className="btn">Order Status</Link>
      </div>
    </div>
  );
};

export default UserDashboard;
