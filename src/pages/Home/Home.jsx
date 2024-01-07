import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Loader from 'components/Loader';
import { fetchGetTrendingMovies } from 'components/services/api';
import css from './Home.module.css';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const location = useLocation();

  useEffect(() => {
    setStatus('pending');
    fetchGetTrendingMovies()
      .then(({ results }) => {
        setTrendingMovies(results);
        setStatus('resolved');
      })
      .catch(error => {
        setStatus('error');
        setError(error.message);
      });
  }, []);

  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'resolved' && (
        <main className={css.main}>
          <h1 className={css.title}>Trending today</h1>
          <ul className={css.trendingList}>
            {trendingMovies.map(({ id, title, name }) => {
              return (
                <li className={css.trendingItem} key={id}>
                  <NavLink
                    className={css.link}
                    to={`movies/${id}`}
                    state={{ from: location }}
                  >
                    {title ?? name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </main>
      )}
      {status === 'error' && <h1 className={css.error}>{error}</h1>}
    </>
  );
};

export default Home;
