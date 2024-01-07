import { API, options } from './support';

export const fetchGetTrendingMovies = () => {
  return fetch(
    'https://api.themoviedb.org/3/trending/all/day?language=en-US',
    options
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error('Oops, something went wrong'));
  });
};

export const fetchGetMovieDetails = id => {
  return fetch(`${API.request}${id}?language=en-US`, options).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error('Oops, something went wrong'));
  });
};

export const fetchGetCastMovie = id => {
  return fetch(`${API.request}${id}/credits`, options).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error('Oops, something went wrong'));
  });
};

export const fetchGetMovieReviews = id => {
  return fetch(`${API.request}${id}/reviews`, options).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error('Oops, something went wrong'));
  });
};

export const fetchSearchMovies = searchQuery => {
  return fetch(
    `${API.searchMovie}?query=${searchQuery}&include_adult=false&language=en-US&page=1`,
    options
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error('Oops, something went wrong'));
  });
};
