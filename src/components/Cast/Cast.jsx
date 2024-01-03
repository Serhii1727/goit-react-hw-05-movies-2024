import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGetCastMovie } from 'components/services/api';
import { API } from 'components/services/support';
import css from './Cast.module.css';
import defaultImage from '../services/DefaultImage/defaultimage.jpg';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchGetCastMovie(movieId).then(({ cast }) => {
      const dataCastMovie = cast.map(
        ({ name, profile_path, character, id }) => {
          return { name, profile: profile_path, character, id };
        }
      );
      setCast(dataCastMovie);
    });
  }, [movieId]);

  return (
    <section className={css.sectionCast}>
      {cast.length > 0 && (
        <ul className={css.castList}>
          {cast.map(({ profile, name, character, id }) => {
            return (
              <li key={id} className={css.castListItem}>
                <img
                  className={css.image}
                  src={profile ? `${API.getImage}${profile}` : defaultImage}
                  alt={name}
                />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      )}
      {cast.length === 0 && (
        <p className={css.error}>Sorry, we don't have cast for this movie</p>
      )}
    </section>
  );
};

export default Cast;
