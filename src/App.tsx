import { useState } from 'react'
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import UserHome from './components/UserHome';
import './App.css'
import ListLost from './components/ListLost'
import LoginForm from './components/LoginForm'
import UserInsertLost from './components/UserInsertLost'
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div>
    <h1>Lost & Found</h1>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/user/home" element={<UserHome />} />
        <Route path="/user/login" element={<LoginForm />} />
        <Route path="/user/insertlost" element={<UserInsertLost />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
    </div>
  );
}

export default App
