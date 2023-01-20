import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  ReviewsStyled,
  ReviewsListStyled,
  ReviewItemStyled,
  ReviewAuthorStyled,
  ReviewContentStyled,
  ReviewDateStyled,
} from './Reviews.styled';
import { getReviewsById } from 'services/MovieApi';

export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        const reviews = await getReviewsById(movieId);
        setReviews(reviews);
      } catch (error) {
        toast.error('Whoops, something went wrong ', error.message);
        return;
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <ReviewsStyled>
      {reviews?.length === 0 ? (
        <p>There are no reviews yet</p>
      ) : (
        <ReviewsListStyled>
          {reviews?.map(({ id, author, created_at, content }) => (
            <ReviewItemStyled key={id}>
              <ReviewAuthorStyled>{author}</ReviewAuthorStyled>
              <p>
                <ReviewDateStyled>
                  {new Date(created_at).toLocaleDateString()}
                </ReviewDateStyled>
              </p>
              <ReviewContentStyled>{content}</ReviewContentStyled>
            </ReviewItemStyled>
          ))}
        </ReviewsListStyled>
      )}
    </ReviewsStyled>
  );
}
