import { Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Movies from './movies/Movies';
import ErrorPsge from './errorPsge/ErrorPsge';
import MovieDetails from './movieDetails/MovieDetails';
import Cast from './cast/Cast';
import Reviews from './reviews/Reviews';
import SharedLayout from './sharedLayout/SharedLayout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movie-details" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<ErrorPsge />} />
        </Route>
      </Routes>
    </>
  );
};
