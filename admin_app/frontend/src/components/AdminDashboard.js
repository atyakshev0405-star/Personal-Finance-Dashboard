import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminDashboard({ onLogout }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const response = await axios.get('/admin/users');
      setUsers(response.data);
    } catch (err) {
      setError('Failed to load users');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="admin-dashboard">
      <header>
        <h1>User Management</h1>
        <button onClick={onLogout}>Logout</button>
      </header>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Hashed Password</th>
            <th>Last IP</th>
            <th>Expense Count</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.hashed_password}</td>
              <td>{user.last_ip || 'N/A'}</td>
              <td>{user.expense_count}</td>
              <td>{user.is_active ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
