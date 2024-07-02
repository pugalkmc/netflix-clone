import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const isAuthenticated = !!localStorage.getItem('token'); // Example authentication check

  const handleLogout = () => {
    localStorage.clear()
    window.location.href = '/login';
  };

  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold">
          Netflix Clone
        </Link>
        <nav className="space-x-4">
          {isAuthenticated ? (
            <>
              <Link to="/movies" className="hover:underline">Movies</Link>
              <Link to="/profile" className="hover:underline">Profile</Link>
              <button onClick={handleLogout} className="hover:underline">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:underline">Login</Link>
              <Link to="/register" className="hover:underline">Register</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;