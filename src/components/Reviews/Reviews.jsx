import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGetMovieReviews } from 'components/services/api';

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
    <>
      <div>Reviews</div>
      {reviews.length > 0 &&
        reviews.map(({ author, content, id }) => {
          return (
            <p key={id}>
              <div>{author}</div>
              <div>{content}</div>
            </p>
          );
        })}
    </>
  );
};

export default Reviews;
