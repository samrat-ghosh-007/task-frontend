import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function UserSelect({ selectedUser, setSelectedUser, refreshFlag }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/users/random`)
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, [refreshFlag]); // refreshFlag ensures it reloads on new user/claim

  return (
    <div style={{ marginBottom: '1rem' }}>
      <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
        <option value="">Select User</option>
        {users.map(user => (
          <option key={user._id} value={user._id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
}






// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function UserSelect({ selectedUser, setSelectedUser, refreshFlag }) {
//   const [users, setUsers] = useState([]);

//   // Get 10 random users
// router.get('/', async (req, res) => {
//   try {
//     const users = await User.aggregate([{ $sample: { size: 10 } }]);
//     res.json(users);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to fetch random users' });
//   }
// });

//   return (
//     <div>
//       <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
//         <option value="">Select User</option>
//         {users.map(user => (
//           <option key={user._id} value={user._id}>{user.name}</option>
//         ))}
//       </select>
//     </div>
//   );
// }


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './styles.css';

// export default function Leaderboard({ refreshFlag }) {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`${import.meta.env.VITE_BACKEND_URL}/api/users/leaderboard`)
//       .then(res => setUsers(res.data))
//       .catch(err => console.error(err));
//   }, [refreshFlag]);

//   const top3 = users.slice(0, 3);
//   const others = users.slice(3);

//   return (
//     <div className="leaderboard-container">
//       <h2>🏆 Leaderboard</h2>

//       <div className="podium">
//         {top3[1] && (
//           <div className="podium-position second">
//             <div className="podium-box silver">🥈</div>
//             <p>{top3[1].name}</p>
//             <span>{top3[1].totalPoints} pts</span>
//           </div>
//         )}
//         {top3[0] && (
//           <div className="podium-position first">
//             <div className="podium-box gold">🥇</div>
//             <p>{top3[0].name}</p>
//             <span>{top3[0].totalPoints} pts</span>
//           </div>
//         )}
//         {top3[2] && (
//           <div className="podium-position third">
//             <div className="podium-box bronze">🥉</div>
//             <p>{top3[2].name}</p>
//             <span>{top3[2].totalPoints} pts</span>
//           </div>
//         )}
//       </div>

//       {others.length > 0 && (
//         <table className="leaderboard-table">
//           <thead>
//             <tr>
//               <th>Rank</th>
//               <th>Name</th>
//               <th>Total Points</th>
//             </tr>
//           </thead>
//           <tbody>
//             {others.map(user => (
//               <tr key={user.rank}>
//                 <td>{user.rank}</td>
//                 <td>{user.name}</td>
//                 <td>{user.totalPoints}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }
