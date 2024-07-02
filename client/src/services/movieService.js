import axiosInstance from './axiosInstance';

const getMovies = async () => {
  const response = await axiosInstance.get('/movies');
  return response.data;
};

const getMovieById = async (id) => {
  const response = await axiosInstance.get(`/movies/${id}`);
  return response.data;
};

export { getMovies, getMovieById };