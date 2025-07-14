import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function ClaimButton({ selectedUser, onClaimed }) {
  const claimPoints = async () => {
    if (!selectedUser) {
      toast.warn('⚠️ Please select a user first');
      return;
    }

    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/claim`, {
        userId: selectedUser,
      });
      toast.success(`✅ Claimed ${res.data.points}⭐`);
      onClaimed();
    } catch (err) {
      toast.error('❌ Failed to claim points. Try again.');
    }
  };

  return <button onClick={claimPoints}>Claim</button>;
}
