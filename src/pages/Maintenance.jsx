import React, { useEffect, useState } from "react";
import axios from "../api/axios";

const Maintenance = () => {
  const [records, setRecords] = useState([]);
  const token = localStorage.getItem("token");

  const fetchMaintenances = async () => {
    try {
      const res = await axios.get("/api/maintenance", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRecords(res.data);
    } catch (err) {
      console.error(err);
      alert("You are not authorized to access this page.");
    }
  };

  useEffect(() => {
    fetchMaintenances();
  });

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Maintenance Records</h2>
      {records.map((rec) => (
        <div key={rec._id} className="border p-2 mb-2 rounded shadow">
          <h3 className="font-semibold">{rec.title}</h3>
          <p>{rec.description}</p>
          <p>
            <strong>Date:</strong>{" "}
            {new Date(rec.scheduledDate).toLocaleDateString()}
          </p>
          <p>
            <strong>Status:</strong> {rec.status}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Maintenance;
