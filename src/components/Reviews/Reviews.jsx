import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGetMovieReviews } from 'components/services/api';
import css from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchGetMovieReviews(movieId).then(data => {
      const { results } = data;
      const currentReviews = results.map(({ author, content, id }) => {
        return { author, content, id };
      });
      setReviews(currentReviews);
    });
  }, [movieId]);
  return (
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
  );
};

export default Reviews;
