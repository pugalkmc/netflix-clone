// routes/userRoutes.js

import express from 'express';
import { getProfile, updateUser, deleteUser } from '../controllers/userController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// GET user profile
router.get('/me', auth, getProfile);

// PUT update user profile
router.put('/me', auth, updateUser);

// DELETE delete user account
router.delete('/me', auth, deleteUser);

export default router;
