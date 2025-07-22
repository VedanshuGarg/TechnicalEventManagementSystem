import React from "react";
import { Routes, Route } from "react-router-dom";
import VendorDashboard from "./VendorDashboard";
import AddItem from "../components/Vendor/AddItem";
import YourItems from "../components/Vendor/YourItems";
import Transaction from "../components/Vendor/Transaction";
import ProtectedRoute from "../routes/ProtectedRoute";

const VendorPage = () => {
  return (
    <Routes>
      <Route path="/vendor" element={<ProtectedRoute role="vendor"><VendorDashboard /></ProtectedRoute>} />
      <Route path="/vendor/add-item" element={<ProtectedRoute role="vendor"><AddItem /></ProtectedRoute>} />
      <Route path="/vendor/items" element={<ProtectedRoute role="vendor"><YourItems /></ProtectedRoute>} />
      <Route path="/vendor/transactions" element={<ProtectedRoute role="vendor"><Transaction /></ProtectedRoute>} />
    </Routes>
  );
};

export default VendorPage;
