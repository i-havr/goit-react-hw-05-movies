import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  MoviesListStyled,
  MovieListItemWrapper,
  MovieName,
  LinkStyled,
} from './MoviesList.styled';

export default function MoviesList({ movies, path = '' }) {
  const location = useLocation();

  return (
    <MoviesListStyled>
      {movies?.map(({ id, title }) => (
        <MovieListItemWrapper key={id}>
          <LinkStyled to={`${path}${id}`} state={{ from: location }}>
            <MovieName>{title}</MovieName>
          </LinkStyled>
        </MovieListItemWrapper>
      ))}
    </MoviesListStyled>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  path: PropTypes.string,
};
