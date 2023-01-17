import axios from 'axios';
const API_KEY = '070e726b821084418d8595d77c6d6564';

axios.defaults.baseURL = 'https://api.themoviedb.org';
async function fetchFilms(queryType = 'trending/movie/day', searchedFilm = '') {
  const response = await axios.get(
    `/3/${queryType}?api_key=${API_KEY}${searchedFilm}`
  );
  // console.log(response.data);
  return response.data;
}

export default fetchFilms;
