// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import AccountPage from './components/AccountPage';

function App() {
  return (
    <Router>
      {/* Simple Navbar */}
      <Navbar />
      <div className="container mt-4">
        {/* Define Routes for different pages */}
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/" element={<h2>Welcome to Account Management App</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
