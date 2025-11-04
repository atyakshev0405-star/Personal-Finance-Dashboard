import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import './App.css';

axios.defaults.baseURL = 'http://localhost:8000';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // Verify token by making a request
      axios.get('/transactions').then(() => {
        setUser({ token });
      }).catch(() => {
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
      }).finally(() => {
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem('token', token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    setUser({ token });
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    setUser(null);
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/login"
            element={user ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />}
          />
          <Route
            path="/register"
            element={user ? <Navigate to="/dashboard" /> : <Register onLogin={handleLogin} />}
          />
          <Route
            path="/dashboard"
            element={user ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/login" />}
          />
          <Route path="/" element={<Navigate to={user ? "/dashboard" : "/login"} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
