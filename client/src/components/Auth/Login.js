import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../services/axiosInstance.js'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(()=> {
    if (localStorage.getItem('token')){
      navigate('/')
    }
  })

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Regular login with actual credentials using axiosInstance
      const response = await axiosInstance.post('/auth/login', { email, password });

      if (response.data.token) {
        // Store token in localStorage (Replace with your token handling logic)
        localStorage.setItem('token', response.data.token);
        
        // Redirect to movies page after successful login
        navigate('/movies');
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  const handleSimulateLogin = async () => {
    // Simulate login with a mock token (Replace with actual token handling logic)
    const mockToken = await axiosInstance.get('/auth/temp');
    localStorage.setItem('token', mockToken.data.token);
    localStorage.setItem('type', 'sample');
    // Redirect to movies page after simulation login
    navigate('/movies');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Login</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-400 mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-gray-400 mt-4 text-center">
          Don't have an account? <a href="/register" className="text-red-500 hover:underline">Register</a>
        </p>
        <div className="mt-4 text-center">
          <button
            className="text-gray-400 hover:text-white"
            onClick={handleSimulateLogin}
          >
            Simulate Login (Global)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
