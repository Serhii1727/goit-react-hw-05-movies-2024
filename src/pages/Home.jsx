import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchGetTrendingMovies } from 'components/services/api';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchGetTrendingMovies().then(({ results }) => {
      setTrendingMovies(results);
    });
  }, []);

  return (
    <>
      <div>Home</div>
      <main>
        <ul>
          {trendingMovies.map(({ id, title, name }) => {
            return (
              <li key={id}>
                <NavLink to={`movies/${id}`}>{title ?? name}</NavLink>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};

export default Home;
