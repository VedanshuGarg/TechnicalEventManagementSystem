import React from "react";
import { Link } from "react-router-dom";

const VendorDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Vendor Dashboard</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <Link
            to="/your-items"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-4 rounded-2xl shadow"
          >
            Your Items
          </Link>
          <Link
            to="/add-item"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-4 rounded-2xl shadow"
          >
            Add New Item
          </Link>
          <Link
            to="/transactions"
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-4 px-4 rounded-2xl shadow"
          >
            Transactions
          </Link>
          <Link
            to="/product-status"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-4 px-4 rounded-2xl shadow"
          >
            Product Status
          </Link>
          <Link
            to="/request-items"
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 px-4 rounded-2xl shadow"
          >
            Request Items
          </Link>
          <Link
            to="/view-products"
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-4 px-4 rounded-2xl shadow"
          >
            View Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;
