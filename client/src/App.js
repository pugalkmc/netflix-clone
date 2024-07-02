import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import MovieList from './components/Movies/MovieList';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import UserProfile from './components/Users/UserProfile';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          {/* Route for Login page without Header and Footer */}
          <Route path="/login" element={<Login />} />

          {/* Route for Register page without Header and Footer */}
          <Route path="/register" element={<Register />} />

          {/* Routes with Header and Footer */}
          <Route
            path="/*"
            element={
              <>
                <Header />
                <main className="flex-grow">
                  <Routes>
                    {/* Default route and other routes with Header and Footer */}
                    <Route path="/profile" element={<UserProfile/>} />
                    <Route path="/movies" element={<MovieList />} />
                    <Route path="/" element={<MovieList />} />
                  </Routes>
                </main>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
