import express from 'express';
import { getProfile, updateUser, deleteUser } from '../controllers/userController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/me', auth, getProfile);
router.put('/me', auth, updateUser);
router.delete('/me', auth, deleteUser);

export default router;
