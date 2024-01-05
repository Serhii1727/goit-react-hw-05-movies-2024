import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
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
    fetchSearchMovies(searchQuery).then(data => console.log(data));
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
    </>
  );
};

export default SearchMovies;
