import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  CastStyled,
  CastListStyled,
  CastItemStyled,
  ActorNameStyled,
  CharacterStyled,
} from './Cast.styled';
import { getCreditsById } from 'services/MovieApi';
import notFoundImage from '../../images/image-not-found.jpg';

export default function Cast() {
  const [actors, setCredits] = useState(null);
  const { movieId } = useParams();

  const photoPathBase = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    const getActors = async () => {
      try {
        const { cast } = await getCreditsById(movieId);
        setCredits(cast);
      } catch (error) {
        toast.error('Whoops, something went wrong ', error.message);
        return;
      }
    };
    getActors();
  }, [movieId]);

  return (
    <CastStyled>
      {actors?.length === 0 ? (
        <p>There is no information to display</p>
      ) : (
        <CastListStyled>
          {actors?.map(({ credit_id, name, character, profile_path }) => (
            <CastItemStyled key={credit_id}>
              {profile_path ? (
                <img src={photoPathBase + profile_path} alt={name} />
              ) : (
                <img src={notFoundImage} alt="Not found" />
              )}
              <ActorNameStyled>{name}</ActorNameStyled>
              <CharacterStyled>
                Character:
                <br />
                {character}
              </CharacterStyled>
            </CastItemStyled>
          ))}
        </CastListStyled>
      )}
    </CastStyled>
  );
}
