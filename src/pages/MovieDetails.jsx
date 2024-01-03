import { useState, useEffect } from 'react';
import { Outlet, NavLink, useParams } from 'react-router-dom';
import { fetchGetMovieDetails } from 'components/services/api';
import { API } from 'components/services/support';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    fetchGetMovieDetails(movieId).then(
      ({
        title,
        overview,
        genres,
        vote_average,
        poster_path,
        release_date,
      }) => {
        const date = new Date(release_date);
        const dateRelease = date.getFullYear();

        const userScore = Math.ceil(vote_average * 10);
        setMovieDetails({
          title,
          overview,
          genres,
          userScore,
          poster: poster_path,
          dateRelease,
        });
      }
    );
  }, [movieId]);

  return (
    <>
      <div>MovieDetails</div>
      <div>
        <img
          src={`${API.getImage}${movieDetails.poster}`}
          alt={movieDetails.title}
        />
        <h1>{movieDetails.title}</h1>
        <p>
          <span>(</span>
          {movieDetails.dateRelease}
          <span>)</span>
        </p>
        <p>User score: {movieDetails.userScore}%</p>
        <h2>Overview</h2>
        <p>{movieDetails.overview}</p>
        <h3>Genres</h3>
        {/* {movieDetails.genres.length > 0 &&
          movieDetails.genres.map(({ id, name }) => {
            return <p key={id}>{name}</p>;
          })} */}
      </div>
      <NavLink to="cast">Cast</NavLink>
      <NavLink to="reviews">Reviews</NavLink>
      <Outlet />
    </>
  );
};

export default MovieDetails;
