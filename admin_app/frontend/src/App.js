import React, { useState } from 'react';
import axios from 'axios';
import AdminDashboard from './components/AdminDashboard';
import './App.css';

axios.defaults.baseURL = 'http://127.0.0.1:8001';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/admin/login', { username, password });
      setIsLoggedIn(true);
      setError('');
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  if (isLoggedIn) {
    return <AdminDashboard onLogout={() => setIsLoggedIn(false)} />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Admin Panel</h1>
        <form onSubmit={handleLogin}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit">Login</button>
        </form>
      </header>
    </div>
  );
}

export default App;
