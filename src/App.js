import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./components/Login";
import Register from "./pages/Register";
import MaintenancePage from "./pages/Maintenance";
import Unauthorized from "./pages/Unauthorized";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import Reports from "./pages/Reports";
import Transactions from "./pages/Transactions";
import AddOrUpdateMembership from "./pages/AddOrUpdateMembership";
import VendorDashboard from "./pages/VendorDashboard";
import YourItems from "./pages/vendor/YourItems";
import AddItem from "./pages/vendor/AddItem";
import VendorTransactions from "./pages/vendor/VendorTransactions";
import ProductStatus from "./pages/vendor/ProductStatus";
import RequestItems from "./pages/vendor/RequestItems";
import ViewProducts from "./pages/vendor/ViewProducts";
import VendorList from "./pages/user/VendorList";
import Cart from "./pages/user/Cart";
import GuestList from "./pages/user/GuestList";
import OrderStatus from "./pages/user/OrderStatus";

function App() {
  // Get user from localStorage (assumes token contains role info)
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <BrowserRouter>
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Role-based routes */}
          <Route
            path="/maintenance"
            element={
              user?.role === "admin" ? (
                <MaintenancePage />
              ) : (
                <Navigate to="/unauthorized" />
              )
            }
          />
          <Route
            path="/admin-dashboard"
            element={
              user?.role === "admin" ? (
                <AdminDashboard />
              ) : (
                <Navigate to="/unauthorized" />
              )
            }
          />
          <Route
            path="/admin/memberships"
            element={
              user?.role === "admin" ? (
                <AddOrUpdateMembership />
              ) : (
                <Navigate to="/unauthorized" />
              )
            }
          />
          <Route
            path="/user-dashboard"
            element={
              user?.role === "user" ? (
                <UserDashboard />
              ) : (
                <Navigate to="/unauthorized" />
              )
            }
          />

          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/reports" element={<Reports />} />
          <Route
            path="/transactions"
            element={
              user?.role === "admin" ||
              user?.role === "user" ||
              user?.role === "vendor" ? (
                <Transactions />
              ) : (
                <Navigate to="/unauthorized" />
              )
            }
          />
          <Route
            path="/vendor-dashboard"
            element={
              user?.role === "vendor" ? (
                <VendorDashboard />
              ) : (
                <Navigate to="/unauthorized" />
              )
            }
          />
          <Route path="/vendor/items" element={<YourItems />} />
          <Route path="/vendor/add-item" element={<AddItem />} />
          <Route path="/vendor/transactions" element={<VendorTransactions />} />
          <Route path="/vendor/status" element={<ProductStatus />} />
          <Route path="/vendor/request" element={<RequestItems />} />
          <Route path="/vendor/products" element={<ViewProducts />} />
          <Route path="/user/vendors" element={<VendorList />} />
          <Route path="/user/cart" element={<Cart />} />
          <Route path="/user/guest" element={<GuestList />} />
          <Route path="/user/order-status" element={<OrderStatus />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
