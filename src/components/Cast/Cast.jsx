import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchGetCastMovie } from 'components/services/api';
import { API } from 'components/services/support';
import Loader from 'components/Loader';
import css from './Cast.module.css';
import defaultImage from '../services/DefaultImage/defaultimage.jpg';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();
  const location = useLocation();
  console.log('cast', location.state);

  useEffect(() => {
    setStatus('pending');
    fetchGetCastMovie(movieId).then(({ cast }) => {
      const dataCastMovie = cast.map(
        ({ name, profile_path, character, id }) => {
          return { name, profile: profile_path, character, id };
        }
      );
      setCast(dataCastMovie);
      setStatus('resolved');
    });
  }, [movieId]);

  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'resolved' && (
        <section className={css.sectionCast}>
          {
            <ul className={css.castList}>
              {cast.length > 0 ? (
                cast.map(({ profile, name, character, id }) => {
                  return (
                    <li key={id} className={css.castListItem}>
                      <img
                        className={css.image}
                        src={
                          profile ? `${API.getImage}${profile}` : defaultImage
                        }
                        alt={name}
                      />
                      <p>{name}</p>
                      <p>Character: {character}</p>
                    </li>
                  );
                })
              ) : (
                <li className={css.notFound} key={1}>
                  We don`t have any cast for this movie
                </li>
              )}
            </ul>
          }
        </section>
      )}
    </>
  );
};

export default Cast;
