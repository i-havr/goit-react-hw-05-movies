import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import NotFound from 'pages/NotFound/NotFound';

export const App = () => {
  const [movieId, setMovieId] = useState(null);
  const getMovieId = movieId => {
    setMovieId(movieId);
  };

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route
          path="movies/:movieId"
          element={<MovieDetails getMovieId={getMovieId} />}
        >
          <Route path="cast" element={<Cast id={movieId} />} />
          <Route path="reviews" element={<Reviews id={movieId} />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
