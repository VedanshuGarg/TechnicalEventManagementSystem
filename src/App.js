import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
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
  const user = JSON.parse(localStorage.getItem("user"));
  const role = localStorage.getItem("role") || (user && user.role) || "";
  console.log("User:", user);
  console.log("User Role:", role);
  return (
    <BrowserRouter>
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/maintenance" element={<MaintenancePage />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin/memberships" element={<AddOrUpdateMembership />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/vendor-dashboard" element={<VendorDashboard />} />
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
