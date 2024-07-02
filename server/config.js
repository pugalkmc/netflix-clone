
// config.js

import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3001
const MONGO_URI = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET;

export {
  PORT,
  MONGO_URI,
  JWT_SECRET
};
