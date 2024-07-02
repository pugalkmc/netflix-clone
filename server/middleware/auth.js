import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const auth = (req, res, next) => {
  // Check for token in headers
  const authHeader = req.headers.authorization;

  // If no token found
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authorization denied. No token provided.' });
  }

  // Extract token
  const token = authHeader.split(' ')[1];

  // Log the token to verify it's correctly extracted
  console.log('Token:', token);

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Add user from payload
    req.user = decoded;
    next();
  } catch (e) {
    console.error('JWT Verification Error:', e.message);
    return res.status(401).json({ message: 'Token is not valid' });
  }
};

export default auth;
