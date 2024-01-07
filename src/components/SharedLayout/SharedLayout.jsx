import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader';
import css from './SharedLayout.module.css';
import { Link } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <header className={css.header}>
        <ul className={css.navList}>
          <li className={css.navItem}>
            <Link to={'/'}>Home</Link>
          </li>
          <li className={css.navItem}>
            <Link to="movies">Movies</Link>
          </li>
        </ul>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
