import axios from 'axios';
const API_KEY = '070e726b821084418d8595d77c6d6564';

axios.defaults.baseURL = 'https://api.themoviedb.org';

export const getTrendingMovies = async () => {
  const response = await axios.get(`/3/trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};

export const searchMovies = async query => {
  const response = await axios.get(
    `/3/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return response.data.results;
};

export const getMovieById = async movieId => {
  const response = await axios.get(`/3/movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
};

export const getCreditsById = async movieId => {
  const response = await axios.get(
    `/3/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return response.data;
};

export const getReviewsById = async movieId => {
  const response = await axios.get(
    `/3/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return response.data.results;
};
