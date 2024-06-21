// models/Movie.js

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Define the Movie schema
const movieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  // Additional fields can be added here
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create and export the Movie model based on the schema
const Movie = mongoose.model('Movie', movieSchema);

export default Movie;
