export const API = {
  request: 'https://api.themoviedb.org/3/movie/',
  key: 'b95b13270f44be3e23d3c62e0852c09c',
  token:
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTViMTMyNzBmNDRiZTNlMjNkM2M2MmUwODUyYzA5YyIsInN1YiI6IjY1OTQzYTZkMDI4ZjE0NzY5NGM3MjJkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cmSUhygmIIjUC6Ea5HsTcu7XR4RoGg8-6MjFJfqrV7k',
  getImage: 'https://image.tmdb.org/t/p/w500',
  searchMovie: 'https://api.themoviedb.org/3/search/movie',
};

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API.token}`,
  },
};
