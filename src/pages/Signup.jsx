import React, { useState } from 'react';
import axios from '../api/axios';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'user' });

  const handleSignup = async () => {
    try {
      await axios.post('http://localhost:5000/api/users/signup', form);
      alert("Signup successful. Please login.");
    } catch {
      alert("Email already exists.");
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-5">
        <h3 className="text-center mb-3">Signup</h3>
        <input className="form-control mb-2" placeholder="Name"
          onChange={e => setForm({ ...form, name: e.target.value })} />
        <input className="form-control mb-2" placeholder="Email"
          onChange={e => setForm({ ...form, email: e.target.value })} />
        <input type="password" className="form-control mb-2" placeholder="Password"
          onChange={e => setForm({ ...form, password: e.target.value })} />
        <select className="form-select mb-3" onChange={e => setForm({ ...form, role: e.target.value })}>
          <option value="user">User</option>
          <option value="vendor">Vendor</option>
          <option value="admin">Admin</option>
        </select>
        <button className="btn btn-success w-100" onClick={handleSignup}>Signup</button>
        <div className="text-center mt-3">
          <small>Already have an account? <Link to="/">Login</Link></small>
        </div>
      </div>
    </div>
  );
}
