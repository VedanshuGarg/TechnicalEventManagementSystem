import { useState } from 'react';
import axios from '../api/axios';

const AddOrUpdateMembership = () => {
  const [mode, setMode] = useState('add');
  const [membershipNumber, setMembershipNumber] = useState('');
  const [duration, setDuration] = useState('6 months');
  const [action, setAction] = useState('extend');

  const handleAdd = async () => {
    try {
      await axios.post('/membership/add', {
        membershipNumber,
        duration
      }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      alert('Membership added!');
    } catch (err) {
      alert('Error adding membership');
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put('/membership/update', {
        membershipNumber,
        action
      }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      alert('Membership updated!');
    } catch (err) {
      alert('Error updating membership');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">{mode === 'add' ? 'Add' : 'Update'} Membership</h2>

      <div className="mb-4">
        <label className="block mb-1">Membership Number</label>
        <input
          type="text"
          className="w-full border px-3 py-2"
          value={membershipNumber}
          onChange={(e) => setMembershipNumber(e.target.value)}
          required
        />
      </div>

      {mode === 'add' && (
        <div className="mb-4">
          <label className="block mb-1">Duration</label>
          <select
            className="w-full border px-3 py-2"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          >
            <option value="6 months">6 months</option>
            <option value="1 year">1 year</option>
            <option value="2 years">2 years</option>
          </select>
        </div>
      )}

      {mode === 'update' && (
        <div className="mb-4">
          <label className="block mb-1">Action</label>
          <select
            className="w-full border px-3 py-2"
            value={action}
            onChange={(e) => setAction(e.target.value)}
          >
            <option value="extend">Extend by 6 months</option>
            <option value="cancel">Cancel Membership</option>
          </select>
        </div>
      )}

      <div className="flex gap-4">
        <button
          onClick={mode === 'add' ? handleAdd : handleUpdate}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {mode === 'add' ? 'Add Membership' : 'Update Membership'}
        </button>
        <button
          onClick={() => setMode(mode === 'add' ? 'update' : 'add')}
          className="text-blue-600 underline"
        >
          Switch to {mode === 'add' ? 'Update' : 'Add'}
        </button>
      </div>
    </div>
  );
};

export default AddOrUpdateMembership;
