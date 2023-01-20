import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { HomeStyled, TrendingTitleStyled } from './Home.styled';
import MoviesList from 'components/MoviesList/MoviesList';
import { getTrendingMovies } from 'services/MovieApi';

export default function Home() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const movies = await getTrendingMovies();
        setMovies(movies);
      } catch (error) {
        toast.error('Whoops, something went wrong ', error.message);
        return;
      }
    };
    getMovies();
  }, []);

  return (
    <>
      {movies && (
        <HomeStyled>
          <TrendingTitleStyled>Trending today</TrendingTitleStyled>
          <MoviesList movies={movies} path={'movies/'}></MoviesList>
        </HomeStyled>
      )}
    </>
  );
}
