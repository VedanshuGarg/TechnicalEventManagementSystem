import React, { useEffect, useState } from "react";
import axios from '../../api/axios';

const VendorList = () => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/user/vendors");
        setVendors(response.data);
      } catch (error) {
        console.error("Error fetching vendors", error);
      }
    };
    fetchVendors();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Vendor List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {vendors.map((vendor) => (
          <div
            key={vendor._id}
            className="bg-white p-4 rounded-lg shadow border border-gray-200"
          >
            <h3 className="text-xl font-semibold">{vendor.name}</h3>
            <p>Email: {vendor.email}</p>
            <p>Company: {vendor.company}</p>
            <p>Contact: {vendor.contact}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorList;
