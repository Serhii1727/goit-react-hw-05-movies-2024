import { useEffect, useState } from 'react';
import { useSearchParams, NavLink, useLocation } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import css from './SearchMovies.module.css';
import { fetchSearchMovies } from 'components/services/api';

const SearchMovies = () => {
  const [listFilterMovies, setListFilterMovies] = useState([]);
  const [searchInInput, setSearchInInput] = useState('');
  const location = useLocation();

  const [searchParam, setSearchParam] = useSearchParams();

  const searchQuery = searchParam.get('query') ?? '';

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    fetchSearchMovies(searchQuery).then(({ results }) => {
      const searchMovies = results.map(({ id, title }) => {
        return { id, title };
      });
      setListFilterMovies(searchMovies);
    });
  }, [searchQuery]);

  const handleSubmit = event => {
    event.preventDefault();
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
    </>
  );
};

export default SearchMovies;
