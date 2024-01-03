import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGetCastMovie } from 'components/services/api';
import { API } from 'components/services/support';

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
    <>
      <div>Cast</div>
      <ul>
        {cast.length > 0 &&
          cast.map(({ profile, name, character, id }) => {
            return (
              <li key={id}>
                <img src={`${API.getImage}${profile}`} alt={name} />
                <p>{name}</p>
                <p>{character}</p>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Cast;
