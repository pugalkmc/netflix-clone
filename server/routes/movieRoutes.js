// routes/movieRoutes.js

import express from 'express';
import { getAllMovies, getMovieById, createMovie, updateMovie, deleteMovie } from '../controllers/movieController.js';

const router = express.Router();

// GET all movies
router.get('/', getAllMovies);

// GET movie by ID
router.get('/:id', getMovieById);

// POST create new movie
router.post('/', createMovie);

// PUT update movie by ID
router.put('/:id', updateMovie);

// DELETE delete movie by ID
router.delete('/:id', deleteMovie);

export default router;
