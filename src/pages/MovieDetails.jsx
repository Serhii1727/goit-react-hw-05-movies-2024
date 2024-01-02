import { Outlet, NavLink } from 'react-router-dom';

const MovieDetails = () => {
  return (
    <>
      <div>MovieDetails</div>
      <NavLink to="cast">Cast</NavLink>
      <NavLink to="reviews">Reviews</NavLink>
      <Outlet />
    </>
  );
};

export default MovieDetails;
