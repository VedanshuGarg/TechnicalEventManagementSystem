import { useEffect, useState } from 'react';
import axios from '../../api/axios';

const GuestList = () => {
  const [guests, setGuests] = useState([]);
  const [form, setForm] = useState({ name: '', contact: '', email: '' });

  const fetchGuests = () => {
    axios.get('/api/guest', { withCredentials: true }).then(res => setGuests(res.data));
  };

  useEffect(fetchGuests, []);

  const addGuest = () => {
    axios.post('/api/guest/add', form, { withCredentials: true }).then(() => {
      setForm({ name: '', contact: '', email: '' });
      fetchGuests();
    });
  };

  const deleteGuest = id => {
    axios.delete(`/api/guest/delete/${id}`, { withCredentials: true }).then(fetchGuests);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Guest List</h2>
      <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Name" className="border m-1 p-1" />
      <input value={form.contact} onChange={e => setForm({ ...form, contact: e.target.value })} placeholder="Contact" className="border m-1 p-1" />
      <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="Email" className="border m-1 p-1" />
      <button onClick={addGuest} className="bg-green-500 text-white p-1 ml-2">Add</button>

      <ul className="mt-4">
        {guests.map(guest => (
          <li key={guest._id} className="flex justify-between border p-1 my-1">
            {guest.name} ({guest.contact})
            <button onClick={() => deleteGuest(guest._id)} className="text-red-500">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GuestList;
