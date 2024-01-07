import { useEffect, useState } from 'react';
import { useSearchParams, NavLink, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { FaSearch } from 'react-icons/fa';
import Loader from 'components/Loader';
import css from './SearchMovies.module.css';
import { fetchSearchMovies } from 'components/services/api';

const SearchMovies = () => {
  const [listFilterMovies, setListFilterMovies] = useState([]);
  const [searchInInput, setSearchInInput] = useState('');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const location = useLocation();

  const [searchParam, setSearchParam] = useSearchParams();

  const searchQuery = searchParam.get('query') ?? '';

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    setStatus('pending');

    fetchSearchMovies(searchQuery)
      .then(({ results }) => {
        console.log(results);
        const searchMovies = results.map(({ id, title }) => {
          return { id, title };
        });
        if (searchMovies.length === 0) {
          setStatus('error');
          setError(`Nothing found for your request "${searchQuery}"`);
          return;
        }

        setListFilterMovies(searchMovies);
        setStatus('resolved');
      })
      .catch(error => {
        setStatus('error');
        setError(error.message);
      });
  }, [searchQuery]);

  const handleSubmit = event => {
    event.preventDefault();
    if (searchInInput.trim() === '') {
      toast.warn('Please enter your request');
      return;
    }

    setSearchParam({ query: searchInInput });

    setSearchInInput('');
  };

  const changeInput = event => {
    setSearchInInput(event.currentTarget.value);
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          type="text"
          className={css.input}
          name="searchQuery"
          value={searchInInput}
          onChange={changeInput}
        ></input>
        <button type="submit" className={css.button}>
          <FaSearch />
        </button>
      </form>
      {status === 'pending' && <Loader />}
      {status === 'error' && <h1 className={css.error}>{error}</h1>}
      {status === 'resolved' && (
        <ul className={css.searchList}>
          {listFilterMovies.map(({ id, title }) => {
            return (
              <li className={css.searchItem} key={id}>
                <NavLink
                  className={css.link}
                  to={`${id}`}
                  state={{ from: location }}
                >
                  {title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      )}

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default SearchMovies;
