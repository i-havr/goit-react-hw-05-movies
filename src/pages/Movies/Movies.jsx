import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Searchbar from 'components/Searchbar/Searchbar';
import MoviesList from 'components/MoviesList/MoviesList';
import { MoviesStyled } from './Movies.styled';
import { searchMovies } from 'services/MovieApi';

export default function Movies() {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const handleSubmit = query => {
    setMovies(null);
    setSearchParams({ query });
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    const getSearchResults = async () => {
      try {
        const results = await searchMovies(query);
        results.length > 0 ? setMovies(results) : toast.error('No matches :(');
      } catch (error) {
        toast.error('Whoops, something went wrong. ', error.message);
        return;
      }
    };
    getSearchResults();
  }, [query]);

  return (
    <MoviesStyled>
      <Searchbar onSubmit={handleSubmit} />
      {movies && <MoviesList movies={movies} />}
    </MoviesStyled>
  );
}
