import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesList from 'components/MoviesList';
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
      <main className={css.main}>
        <h1 className={css.title}>Trending today</h1>
        {status === 'pending' && <Loader />}
        {status === 'resolved' && (
          <MoviesList movies={trendingMovies} location={location} />
        )}
        {status === 'error' && <h1 className={css.error}>{error}</h1>}
      </main>
    </>
  );
};

export default Home;
