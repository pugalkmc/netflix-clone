import Movie from '../models/Movie.js';

// Get all movies
const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Get a single movie by ID
const getMovieById = async (req, res) => {
  const { id } = req.params;

  try {
    const movie = await Movie.findById(id);

    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    res.json(movie);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Create a new movie
const createMovie = async (req, res) => {
  const { title, genre, year } = req.body;

  try {
    const newMovie = new Movie({
      title,
      genre,
      year
      // Additional fields can be added here
    });

    await newMovie.save();

    res.json({ message: 'Movie created successfully', movie: newMovie });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Update a movie by ID
const updateMovie = async (req, res) => {
  const { id } = req.params;
  const { title, genre, year } = req.body;

  try {
    let movie = await Movie.findById(id);

    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    movie.title = title;
    movie.genre = genre;
    movie.year = year;

    await movie.save();

    res.json({ message: 'Movie updated successfully', movie });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Delete a movie by ID
const deleteMovie = async (req, res) => {
  const { id } = req.params;

  try {
    let movie = await Movie.findById(id);

    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    await movie.remove();

    res.json({ message: 'Movie deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

export {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie
};