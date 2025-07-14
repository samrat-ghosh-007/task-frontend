import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function AddUser({ onUserAdded }) {
  const [name, setName] = useState('');

  const handleAddUser = async () => {
    if (!name.trim()) return toast.warn('Name cannot be empty');
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users`, { name });
      toast.success('User added!');
      setName('');
      onUserAdded();
    } catch (err) {
      toast.error('Error adding user');
    }
  };

  return (
    <div className="add-user-form">
      <input
        type="text"
        value={name}
        placeholder="Enter user name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
}
