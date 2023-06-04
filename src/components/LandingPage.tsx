import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  const handleUserLogin = () => {
    navigate('/user/login');
  };

  const handleAdminLogin = () => {
    navigate('/admin/login');
  };

  return (
    <div>
      <h1>Welcome to the Landing Page</h1>
      <button onClick={handleUserLogin}>Login</button>
      <p onClick={handleAdminLogin}>Click here for Admin Login</p>
    </div>
  );
}

export default LandingPage;
