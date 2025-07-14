import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';
export default function Leaderboard({ refreshFlag }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/api/users/leaderboard`)
    .then(res => setUsers(res.data))
    .catch(err => console.error(err));
}, [refreshFlag]);


 const top3 = users.slice(0, 3);
const others = users.slice(3);

  
   

  return (
    <div className="leaderboard-container">
      <h2>🏆 Leaderboard</h2>

      <div className="podium">
        {top3[1] && (
          <div className="podium-position second">
            <div className="podium-box silver">🥈</div>
            <p>{top3[1].name}</p>
            <span>⭐{top3[1].totalPoints}</span>
          </div>
        )}
        {top3[0] && (
          <div className="podium-position first">
            <div className="podium-box gold">🥇</div>
            <p>{top3[0].name}</p>
            <span>⭐{top3[0].totalPoints}</span>
          </div>
        )}
        {top3[2] && (
          <div className="podium-position third">
            <div className="podium-box bronze">🥉</div>
            <p>{top3[2].name}</p>
            <span>⭐{top3[2].totalPoints}</span>
          </div>
        )}
      </div>

      {others.length > 0 && (
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Total Points</th>
            </tr>
          </thead>
          <tbody>
            {others.map(user => (
              <tr key={user.rank}>
                <td>{user.rank}</td>
                <td>{user.name}</td>
                <td>{user.totalPoints}⭐</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
  
}
