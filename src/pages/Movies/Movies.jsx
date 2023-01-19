import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import MoviesList from 'components/MoviesList/MoviesList';
import Searchbar from 'components/Searchbar/Searchbar';
import fetchFilms from 'servises/fetchApi';
import { MoviesStyled } from './Movies.styled';

export default function Movies() {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const add = '';

  const handleSubmit = query => {
    setMovies(null);
    setSearchParams({ query: query });
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    const getSearchedFilmsList = async () => {
      try {
        const queryType = `search/movie`;
        const searchedFilm = `&query=${query}`;
        const { results } = await fetchFilms(queryType, searchedFilm);
        results.length > 0 ? setMovies(results) : toast.error('No matches :(');
      } catch (error) {
        toast.error('Whoops, something went wrong: ', error.message);
        return;
      }
    };
    getSearchedFilmsList();
  }, [query]);

  return (
    <MoviesStyled>
      <Searchbar onSubmit={handleSubmit} />
      {movies && <MoviesList movies={movies} add={add} />}
    </MoviesStyled>
  );
}

Movies.propTypes = {
  //   onSubmit: PropTypes.func.isRequired,
};

// https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher

// https://api.themoviedb.org/3/trending/movie/day?api_key={api_key}
