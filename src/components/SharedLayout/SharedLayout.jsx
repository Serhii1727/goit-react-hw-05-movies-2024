import { Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import { Link } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <header className={css.header}>
        <ul className={css.navList}>
          <li className={css.navItem}>
            <Link to={'/' && '/goit-react-hw-05-movies-2024'}>Home</Link>
          </li>
          <li className={css.navItem}>
            <Link to="movies">Movies</Link>
          </li>
        </ul>
      </header>
      <Outlet />
    </>
  );
};

export default SharedLayout;
