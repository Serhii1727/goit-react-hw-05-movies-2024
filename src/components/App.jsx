import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import SharedLayout from './SharedLayout';

const Home = lazy(() => import('pages/Home/Home'));
const SearchMovies = lazy(() => import('pages/SearchMovies/SearchMovies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<SearchMovies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
