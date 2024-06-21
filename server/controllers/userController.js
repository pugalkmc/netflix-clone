
// controllers/userController.js

import User from '../models/User.js';
import bcrypt from 'bcryptjs'; // For hashing passwords

// Fetch user profile based on req.user (from auth middleware)
const getProfile = async (req, res) => {
  try {
    // Fetch user from database based on user ID in req.user
    const user = await User.findById(req.user.id).select('-password'); // Exclude password from selection
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Update user information
const updateUser = async (req, res) => {
  const { name, email } = req.body;

  try {
    // Fetch user from database
    let user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update user fields
    user.name = name;
    user.email = email;

    // Save updated user
    await user.save();

    res.json({ message: 'User profile updated' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Delete user account
const deleteUser = async (req, res) => {
  try {
    // Find user by ID and delete
    await User.findByIdAndDelete(req.user.id);

    res.json({ message: 'User account deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

export {
  getProfile,
  updateUser,
  deleteUser
};