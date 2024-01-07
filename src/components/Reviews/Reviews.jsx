import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGetMovieReviews } from 'components/services/api';
import Loader from 'components/Loader';
import css from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const { movieId } = useParams();

  useEffect(() => {
    setStatus('pending');
    fetchGetMovieReviews(movieId)
      .then(data => {
        const { results } = data;
        const currentReviews = results.map(({ author, content, id }) => {
          return { author, content, id };
        });
        setReviews(currentReviews);
        setStatus('resolved');
      })
      .catch(error => {
        setStatus('error');
        setError(error.message);
      });
  }, [movieId]);
  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'error' && <h1 className={css.error}>{error}</h1>}
      {status === 'resolved' && (
        <section className={css.sectionReviews}>
          {
            <ul className={css.reviewsList}>
              {reviews.length > 0 ? (
                reviews.map(({ author, content, id }) => {
                  return (
                    <li key={id} className={css.reviewsListItem}>
                      <p className={css.author}>Author: {author}</p>
                      <p className={css.content}>{content}</p>
                    </li>
                  );
                })
              ) : (
                <li className={css.notFound}>
                  We don`t have any reviews for this movie
                </li>
              )}
            </ul>
          }
        </section>
      )}
    </>
  );
};

export default Reviews;
