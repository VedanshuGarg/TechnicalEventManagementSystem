import { useState } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'user' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/auth/register', form);
      alert('Registration successful');
      navigate('/login');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 mt-10 bg-white rounded-xl shadow">
      <h2 className="text-2xl mb-4">Register</h2>
      <input placeholder="Name" className="w-full p-2 border mb-3" onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" className="w-full p-2 border mb-3" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" className="w-full p-2 border mb-3" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <select className="w-full p-2 border mb-3" onChange={(e) => setForm({ ...form, role: e.target.value })}>
        <option value="user">User</option>
        <option value="vendor">Vendor</option>
        <option value="admin">Admin</option>
      </select>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Register</button>
    </form>
  );
}
