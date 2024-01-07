import { useState, useEffect } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { fetchGetMovieDetails } from 'components/services/api';
import { API } from 'components/services/support';
import Loader from 'components/Loader';
import css from './MovieDetails.module.css';
import { Link } from './MovieDetails.styled';
import defaultImage from '../../components/services/DefaultImage/defaultimage.jpg';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const { movieId } = useParams();
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    setStatus('pending');
    fetchGetMovieDetails(movieId)
      .then(
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
          setStatus('resolved');
        }
      )
      .catch(error => {
        setStatus('error');
        setError(error.message);
      });
  }, [movieId]);

  const { title, overview, genres, userScore, poster, dateRelease } =
    movieDetails;

  return (
    <>
      <main className={css.main}>
        <section className={css.sectionButton}>
          <Link to={backLinkHref}>
            <button type="button" className={css.button}>
              <span className={css.icon}>
                <IoMdArrowRoundBack />
              </span>
              <span> Go back</span>
            </button>
          </Link>
        </section>
        {status === 'pending' && <Loader />}
        {status === 'error' && <h1 className={css.error}>{error}</h1>}
        {status === 'resolved' && (
          <>
            <section className={css.containerMovie}>
              <div className={css.imageContainer}>
                <img
                  src={
                    movieDetails.poster
                      ? `${API.getImage}${poster}`
                      : defaultImage
                  }
                  alt={title}
                  className={css.image}
                />
              </div>

              <div className={css.conteinerInfo}>
                <h1 className={css.title}>
                  <span className={css.nameMovie}>
                    {title ? title : 'Not Found'}
                  </span>
                  <span>(</span>
                  <span>{dateRelease ? dateRelease : 'Not found'}</span>
                  <span>)</span>
                </h1>

                <p className={css.infoScore}>
                  User score: {userScore ? `${userScore}%` : 'Not Found'}
                </p>
                <h2 className={css.overviewTitle}>Overview</h2>
                <p className={css.overviewInfo}>
                  {overview ? overview : 'Not Found'}
                </p>
                <h3 className={css.genresTitle}>Genres</h3>
                <ul className={css.genresList}>
                  {genres && genres.length > 0 ? (
                    genres.map(({ id, name }) => {
                      return (
                        <li key={id} className={css.genre}>
                          {name}
                        </li>
                      );
                    })
                  ) : (
                    <li className={css.notFoundGenres}>Not found</li>
                  )}
                </ul>
              </div>
            </section>
            <section className={css.sectionAditionalInfo}>
              <p>Additional Information</p>
              <ul className={css.aditionalList}>
                <li className={css.aditionalListItem}>
                  <Link to="cast" state={{ from: location.state.from }}>
                    Cast
                  </Link>
                </li>
                <li>
                  <Link to="reviews" state={{ from: location.state.from }}>
                    Reviews
                  </Link>
                </li>
              </ul>
            </section>

            <Outlet />
          </>
        )}
      </main>
    </>
  );
};

export default MovieDetails;
