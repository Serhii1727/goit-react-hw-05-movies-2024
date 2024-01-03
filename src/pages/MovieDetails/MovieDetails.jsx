import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { fetchGetMovieDetails } from 'components/services/api';
import { API } from 'components/services/support';
import css from './MovieDetails.module.css';
import { Link } from './MovieDetails.styled';
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
    <main className={css.main}>
      <section className={css.sectionBitton}>
        <button className={css.button}>
          <span className={css.icon}>
            <IoMdArrowRoundBack />
          </span>
          <span> Go back</span>
        </button>
      </section>

      <section className={css.containerMovie}>
        <img
          src={`${API.getImage}${movieDetails.poster}`}
          alt={movieDetails.title}
          className={css.image}
        />
        <div className={css.conteinerInfo}>
          <h1 className={css.title}>
            <span className={css.nameMovie}>{movieDetails.title}</span>
            <span>(</span>
            <span>{movieDetails.dateRelease}</span>
            <span>)</span>
          </h1>

          <p className={css.infoScore}>User score: {movieDetails.userScore}%</p>
          <h2 className={css.overviewTitle}>Overview</h2>
          <p className={css.overviewInfo}>{movieDetails.overview}</p>
          <h3 className={css.genresTitle}>Genres</h3>
          {/* {movieDetails.genres.length > 0 &&
          movieDetails.genres.map(({ id, name }) => {
            return <p key={id}>{name}</p>;
          })} */}
        </div>
      </section>
      <section className={css.sectionAditionalInfo}>
        <p>Additional Information</p>
        <ul className={css.aditionalList}>
          <li className={css.aditionalListItem}>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </section>
      <Outlet />
    </main>
  );
};

export default MovieDetails;
