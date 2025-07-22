import React, { useEffect, useState } from 'react';
import axios from '../api/axios';

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const fetchReports = async () => {
    const token = localStorage.getItem('token');
    const res = await axios.get('/api/reports', {
      headers: { Authorization: `Bearer ${token}` },
    });
    setReports(res.data);
  };

  const submitReport = async () => {
    const token = localStorage.getItem('token');
    await axios.post('/api/reports', { title, description }, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setTitle('');
    setDescription('');
    fetchReports();
  };

  const deleteReport = async (id) => {
    const token = localStorage.getItem('token');
    await axios.delete(`/api/reports/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchReports();
  };

  useEffect(() => {
    fetchReports();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Reports</h2>
      <div className="mb-4">
        <input
          className="border p-2 w-full mb-2"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="border p-2 w-full"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button
          onClick={submitReport}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        >
          Submit Report
        </button>
      </div>

      <ul>
        {reports.map((report) => (
          <li key={report._id} className="border p-3 my-2">
            <h3 className="font-semibold">{report.title}</h3>
            <p>{report.description}</p>
            <button
              className="text-red-500 text-sm mt-1"
              onClick={() => deleteReport(report._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reports;
