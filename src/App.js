import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Dashboard from "./Dashboard";
import React, { useState } from 'react';

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const handleLogin = () => {
  //   // Simulate a successful login
  //   setIsAuthenticated(true);
  // };

  // const handleLogout = () => {
  //   // Simulate a logout
  //   setIsAuthenticated(false);
  // };
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = (credentials) => {
    // Simulate a successful login
    setIsAuthenticated(true);

    // Check if the user is an Admin based on some criteria
    setIsAdmin(credentials.email === 'admin@example.com'); // Replace with your criteria

    // Redirect the user to the dashboard or perform any other actions after login
    // For now, I'm logging to the console to show the credentials
    console.log('User logged in:', credentials);
  };

  const handleLogout = () => {
    // Simulate a logout
    setIsAuthenticated(false);
    setIsAdmin(false);
  };
  return (
    <BrowserRouter>
      <nav className="navbar">
        <ul className="navbar_list">
          <li className="navbar_item">
            <Link to="/register">Register</Link>
          </li>
          <li className="navbar_item">
            <Link to="/login">Login</Link>
          </li>
          <li className="navbar_item">
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>

      {/* <Routes>
        <Route path="/register" element={<Register  handleLogin={handleLogin}/>} />
        <Route path="/login" element={<Login handleLogin={handleLogin}/>} />
        <Route path="/dashboard" isAuthenticated={isAuthenticated} isAdmin={isAdmin}/>
      </Routes> */}
      <Routes>
  <Route path="/register" element={<Register handleLogin={handleLogin} />} />
  <Route path="/login" element={<Login handleLogin={handleLogin} />} />
  <Route
    path="/dashboard"
    element={<Dashboard isAuthenticated={isAuthenticated} isAdmin={isAdmin} />}
  />
</Routes>
    </BrowserRouter>
  );
}

export default App;