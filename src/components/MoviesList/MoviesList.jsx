import {
  MoviesListStyled,
  MovieListItemWrapper,
  MovieName,
  LinkStyled,
} from './MoviesList.styled';

export default function MoviesList({ movies, add }) {
  return (
    <>
      <h2>fghj</h2>
      <MoviesListStyled>
        {movies?.map(movie => (
          <MovieListItemWrapper key={movie.id}>
            <LinkStyled to={`${add}${movie.id}`}>
              <MovieName>{movie.title}</MovieName>
            </LinkStyled>
          </MovieListItemWrapper>
        ))}
      </MoviesListStyled>
    </>
  );
}
