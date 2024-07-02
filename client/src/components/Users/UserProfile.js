import React, { useState, useEffect } from 'react';
import { getUserDetails, updateUserDetails } from '../../services/userService';

const UserProfile = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
  });
  const [editing, setEditing] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await getUserDetails();
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user details', error);
      }
    };

    fetchUserDetails();
  }, []);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      const response = await updateUserDetails(user);
      setUser(response.data);
      setEditing(false);
      setMessage('User details updated successfully.');
      setTimeout(()=>{
        setMessage('')
      }, 2000)
    } catch (error) {
      console.error('Error updating user details', error);
      setMessage('Error updating user details.');
    }
  };

  const handleEdit = ()=> {
    const type = localStorage.getItem('type');

    if (type && type === 'sample'){
        alert("Can't edit profile details of global simulation login");
    }
    else {
        setEditing(true)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">User Profile</h1>
        {message && <p className="text-green-500 mb-4">{message}</p>}
        <form>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none"
              value={user.username}
              onChange={handleChange}
              disabled={!editing}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none"
              value={user.email}
              onChange={handleChange}
              disabled={!editing}
            />
          </div>
          {editing ? (
            <button
              type="button"
              className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition duration-300"
              onClick={handleSave}
            >
              Save
            </button>
          ) : (
            <button
              type="button"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              onClick={handleEdit}
            >
              Edit
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default UserProfile;