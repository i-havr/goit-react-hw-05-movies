import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import MoviesList from 'components/MoviesList/MoviesList';
import { HomeStyled } from './Home.styled';
import fetchFilms from 'servises/fetchApi';
import { toast } from 'react-toastify';

export default function Home() {
  const [movies, setMovies] = useState(null);
  const add = 'movies/';

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { results } = await fetchFilms();
        setMovies(results);
      } catch (error) {
        toast.error('Whoops, something went wrong: ', error.message);
        return;
      }
    };
    getMovies();
  }, []);

  return (
    <HomeStyled>
      {movies && <MoviesList movies={movies} add={add}></MoviesList>}
    </HomeStyled>
  );
}

// Home.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
// };
