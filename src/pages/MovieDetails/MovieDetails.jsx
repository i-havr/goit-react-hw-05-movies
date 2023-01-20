import { useState, useEffect, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import { toast } from 'react-toastify';
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
import { getMovieById } from 'services/MovieApi';
import { Loader } from 'components/Loader/Loader';
import notFoundImage from '../../images/image-not-found.jpg';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);
  const location = useLocation();
  const goBack = location.state?.from ?? '/';

  const posterPathBase = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    const getFilm = async () => {
      try {
        const film = await getMovieById(movieId);
        setFilm(film);
      } catch (error) {
        toast.error('Whoops, something went wrong ', error.message);
        return;
      }
    };
    getFilm();
  }, [movieId]);

  if (film) {
    const { title, release_date, poster_path, overview, vote_average, genres } =
      film;
    return (
      <MovieDetailsStyled>
        <LinkButtonStyled to={goBack}>
          <Button>
            <HiArrowLeft size="14" />
            {'\u202f'} Go back
          </Button>
        </LinkButtonStyled>
        <MovieInfo>
          {!poster_path ? (
            <img src={notFoundImage} alt="Poster not found" width={250} />
          ) : (
            <img src={posterPathBase + poster_path} alt={title} width={250} />
          )}
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
              <LinkStyled to="cast" state={{ from: location.state?.from }}>
                Cast
              </LinkStyled>
            </li>
            <li>
              <LinkStyled to="reviews" state={{ from: location.state?.from }}>
                Reviews
              </LinkStyled>
            </li>
          </AdditionalList>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </AdditionalContainer>
      </MovieDetailsStyled>
    );
  }
}
