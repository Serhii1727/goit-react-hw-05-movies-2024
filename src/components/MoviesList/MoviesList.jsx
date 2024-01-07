import { NavLink } from 'react-router-dom';
import css from './Movies.module.css';

const MoviesList = ({ movies, location }) => {
  return (
    <ul className={css.list}>
      {movies.map(({ id, title, name }) => {
        return (
          <li className={css.item} key={id}>
            <NavLink
              className={css.link}
              to={`/movies/${id}`}
              state={{ from: location }}
            >
              {title ?? name}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default MoviesList;
