import { useState } from 'react';
import { useSearchParams, NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import css from './SearchMovies.module.css';
import { fetchSearchMovies } from 'components/services/api';

const SearchMovies = () => {
  const [listFilterMovies, setListFilterMovies] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();

  const searchQuery = searchParam.get('query') ?? '';

  const handleSubmit = event => {
    event.preventDefault();
    if (!searchQuery) {
      return;
    }
    fetchSearchMovies(searchQuery).then(({ results }) => {
      const searchMovies = results.map(({ id, title }) => {
        return { id, title };
      });
      setListFilterMovies(searchMovies);
    });
  };

  const changeInput = event => {
    setSearchParam({ query: event.currentTarget.value });
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          type="text"
          className={css.input}
          name="searchQuery"
          value={searchQuery}
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
              <NavLink className={css.link} to={`${id}`}>
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
