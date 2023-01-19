import { useState, useEffect } from 'react';
import { HiArrowLeft } from 'react-icons/hi';
import { Outlet, useParams, useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types';
import {
  MovieDetailsStyled,
  MovieInfo,
  MovieDescription,
  FilmTitle,
  UserScore,
  OverviewTitle,
  Overview,
  AdditionalContainer,
  AdditionalTitle,
  AdditionalList,
  LinkStyled,
  LinkButtonStyled,
  GenresTitle,
  Genres,
} from './MovieDetails.styled';
import { Button } from '../../components/Button/Button';
import fetchFilms from 'servises/fetchApi';

export default function MovieDetails({ getMovieId }) {
  const [film, setFilm] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const posterPathBase = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    const getFilm = async () => {
      try {
        const query = `movie/${movieId}`;
        const film = await fetchFilms(query);
        setFilm(film);
        getMovieId(movieId);
      } catch (error) {
        console.log(error.message);
      }
    };
    getFilm();
  }, [getMovieId, movieId]);

  useEffect(() => {}, [film]);

  if (film) {
    const { title, release_date, poster_path, overview, vote_average, genres } =
      film;
    return (
      <MovieDetailsStyled>
        <LinkButtonStyled to={backLinkHref}>
          <Button>
            <HiArrowLeft size="14" />
            {'\u202f'} Go back
          </Button>
        </LinkButtonStyled>
        <MovieInfo>
          <img src={posterPathBase + poster_path} alt={title} width={250} />
          <MovieDescription>
            <FilmTitle>
              {title} ({release_date.slice(0, 4)})
            </FilmTitle>
            <UserScore>User Score: {Math.round(vote_average * 10)}%</UserScore>
            <OverviewTitle>Overview</OverviewTitle>
            <Overview>{overview}</Overview>
            <GenresTitle>Genres</GenresTitle>
            <Genres>{genres.map(genre => genre.name).join(', ')}</Genres>
          </MovieDescription>
        </MovieInfo>

        <AdditionalContainer>
          <AdditionalTitle>Additional information</AdditionalTitle>
          <AdditionalList>
            <li>
              <LinkStyled to="cast">Cast</LinkStyled>
            </li>
            <li>
              <LinkStyled to="reviews">Reviews</LinkStyled>
            </li>
          </AdditionalList>
          <Outlet />
        </AdditionalContainer>
      </MovieDetailsStyled>
    );
  }
}

MovieDetails.propTypes = {
  //   onSubmit: PropTypes.func.isRequired,
};
