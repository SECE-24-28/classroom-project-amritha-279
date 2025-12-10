import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./App.css"; // <-- correct import since App.css is in src

function App() {
  return (
    <div>
      <nav className="header">
        <div className="logo">
          <img src="https://via.placeholder.com/40x20" alt="Logo" />
        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/search">Search</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
