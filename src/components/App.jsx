import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';
import css from './App.module.css';
import { Link } from './App.styled';

export const App = () => {
  return (
    <>
      <header className={css.header}>
        <ul className={css.navList}>
          <li className={css.navItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={css.navItem}>
            <Link to="movies">Movies</Link>
          </li>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};
