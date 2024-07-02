import React, { useEffect, useState } from 'react';
import { getMovies } from '../../services/movieService';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMovies();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div key={movie._id} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
            <img
              src={movie.imageUrl}
              alt={movie.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-white mb-2">{movie.title}</h2>
              <p className="text-gray-400 text-sm mb-4">{movie.description}</p>
              <button className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300">
                Watch Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;