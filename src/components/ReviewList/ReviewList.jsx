import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../services/tmdb-api';
import { ReviewListItem } from './ReviewListItem/ReviewListItem';
import css from './ReviewList.module.css';

const ReviewList = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getReviews(movieId);
        setReviews(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [movieId]);

  return (
    <>
      {reviews.length === 0 ? (
        <div>We don&apos;t have any reviews for this movie.</div>
      ) : (
        <ul className={css.reviewList}>
          {reviews.map(({ id, author, content }) => (
            <ReviewListItem key={id} author={author} content={content} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ReviewList;
