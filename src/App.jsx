import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ Add this line
import UserSelect from './components/UserSelect';
import AddUser from './components/AddUser';
import ClaimButton from './components/ClaimButton';
import Leaderboard from './components/Leaderboard';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export default function App() {
  const [selectedUser, setSelectedUser] = useState('');
  const [refresh, setRefresh] = useState(false);

  const refreshData = () => setRefresh(prev => !prev);

  return (
    <div className="main-container">
      <h1>🎯 Points Claim System</h1>
      
      <div className="card">
        <UserSelect selectedUser={selectedUser} setSelectedUser={setSelectedUser} refreshFlag={refresh} />
        <ClaimButton selectedUser={selectedUser} onClaimed={refreshData} />
      </div>

      <div className="card">
        <AddUser onUserAdded={refreshData} />
      </div>

     

  <Link to="/leaderboard" className="leaderboard-link">
  🏆 View Full Leaderboard
    </Link>

    <ToastContainer position="top-center" autoClose={3000} />

   


     
    </div>
  );
}






