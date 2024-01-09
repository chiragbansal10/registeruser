import React, { useState } from 'react';
import UserTable from './UserTable';

const Dashboard = ({ isAuthenticated, isAdmin }) => {
  const [users, setUsers] = useState([
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com', type: 'User' },
    { id: 2, firstName: 'Admin', lastName: 'User', email: 'admin@example.com', type: 'Admin' },
  ]);

  const handleDeleteUser = (userId) => {
    // Filter out the user to be deleted
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h2>User Dashboard</h2>
      {isAdmin ? (
        <div>
          <p>Welcome, Admin! You can see all user details.</p>
          {/* Display User Table for Admin */}
          <UserTable users={users} isAdmin={isAdmin} onDeleteUser={handleDeleteUser} />
        </div>
      ) : (
        <div>
          <p>Welcome, User! You can see only your own data.</p>
          {/* Display User Table for User */}
          <UserTable users={users.filter(user => user.type === 'User')} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
