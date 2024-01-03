import { API, options } from './support';

export const fetchGetTrendingMovies = () => {
  return fetch(
    'https://api.themoviedb.org/3/trending/all/day?language=en-US',
    options
  ).then(res => res.json());
};

export const fetchGetMovieDetails = id => {
  return fetch(`${API.request}${id}?language=en-US`, options).then(res =>
    res.json()
  );
};

export const fetchGetCastMovie = id => {
  return fetch(`${API.request}${id}/credits`, options).then(res => res.json());
};

export const fetchGetMovieReviews = id => {
  return fetch(`${API.request}${id}/reviews`, options).then(res => res.json());
};
