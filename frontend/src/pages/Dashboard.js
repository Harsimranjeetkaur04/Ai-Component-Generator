// src/components/Dashboard.js
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/config';

function Dashboard() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut().then(() => navigate('/'));
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {currentUser?.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
