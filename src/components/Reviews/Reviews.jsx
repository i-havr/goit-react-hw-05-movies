import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import fetchFilms from 'servises/fetchApi';
import {
  ReviewsStyled,
  ReviewsListStyled,
  ReviewItemStyled,
  ReviewAuthorStyled,
  ReviewContentStyled,
  ReviewDateStyled,
} from './Reviews.styled';

export default function Reviews({ id }) {
  const [reviews, setReviews] = useState(null);
  const query = `movie/${id}/reviews`;

  useEffect(() => {
    const getReviews = async () => {
      const { results } = await fetchFilms(query);
      setReviews(results);
    };
    getReviews();
  }, [query]);

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

Reviews.propTypes = {
  //   onSubmit: PropTypes.func.isRequired,
};
