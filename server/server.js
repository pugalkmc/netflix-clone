import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import mongoSanitize from 'express-mongo-sanitize';
import xss from 'xss-clean';
import hpp from 'hpp';
import dotenv from 'dotenv';
import { JWT_SECRET } from './config.js';
import jwt from 'jsonwebtoken'

import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import movieRoutes from './routes/movieRoutes.js';
import auth from './middleware/auth.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});
app.use('/api', limiter);

// Routes

app.get('/api/auth/temp', async (req, res) => {
  const user = {
    _id: "66838993aad73678f3f5dc72",
    isAdmin: false
  }
  try {
    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, JWT_SECRET, { expiresIn: '1h' });
    res.status(201).json({ token });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Server error' });
  }
})

app.use('/api/auth', authRoutes);
app.use('/api/users', auth, userRoutes);  // Protect user routes
app.use('/api/movies', auth, movieRoutes);  // Protect movie routes

// Connect to MongoDB
const PORT = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
.then(() => {
  console.log('MongoDB connected...');
}).catch(err => {
  console.error('Database connection error:', err);
  process.exit(1); // Exit process with failure
});

mongoose.set('debug', true);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;