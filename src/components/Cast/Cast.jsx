import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import {
  CastStyled,
  CastListStyled,
  CastItemStyled,
  ActorNameStyled,
  CharacterStyled,
} from './Cast.styled';
import fetchFilms from 'servises/fetchApi';
import notFoundImage from '../../images/image-not-found.jpg';

export default function Cast({ id }) {
  const [actors, setCredits] = useState(null);
  const query = `movie/${id}/credits`;
  const photoPathBase = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    const getActors = async () => {
      const { cast } = await fetchFilms(query);
      setCredits(cast);
    };
    getActors();
  }, [query]);

  if (actors) {
    return (
      <CastStyled>
        {actors.length === 0 ? (
          <p>There is no information to display</p>
        ) : (
          <CastListStyled>
            {actors.map(({ id, name, character, profile_path }) => (
              <CastItemStyled key={id}>
                {profile_path ? (
                  <img src={photoPathBase + profile_path} alt={name} />
                ) : (
                  <img src={notFoundImage} alt={name} />
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
}

Cast.propTypes = {
  //   onSubmit: PropTypes.func.isRequired,
};
