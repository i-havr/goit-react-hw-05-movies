import { useLocation } from 'react-router-dom';
import {
  MoviesListStyled,
  MovieListItemWrapper,
  MovieName,
  LinkStyled,
} from './MoviesList.styled';

export default function MoviesList({ movies, add }) {
  const location = useLocation();
  return (
    <MoviesListStyled>
      {movies?.map(movie => (
        <MovieListItemWrapper key={movie.id}>
          <LinkStyled to={`${add}${movie.id}`} state={{ from: location }}>
            <MovieName>{movie.title}</MovieName>
          </LinkStyled>
        </MovieListItemWrapper>
      ))}
    </MoviesListStyled>
  );
}
