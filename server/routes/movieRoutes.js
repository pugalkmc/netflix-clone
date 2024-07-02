import express from 'express';
import {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie
} from '../controllers/movieController.js';
import auth from '../middleware/auth.js';
import admin from '../middleware/admin.js';

const router = express.Router();

// GET all movies
router.get('/', auth, getAllMovies);

// GET a movie by ID
router.get('/:id', auth, getMovieById);

// POST create a new movie
router.post('/', auth, admin, createMovie);

// PUT update a movie by ID
router.put('/:id', auth, admin, updateMovie);

// DELETE a movie by ID
router.delete('/:id', auth, admin, deleteMovie);

export default router;