import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieDetailsStyled = styled.div`
  display: block;
  padding-left: 40px;
  padding-right: 40px;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin-bottom: 20px;
  padding-right: 10%;
`;

export const MovieDescription = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  margin-left: 20px;
  padding: 20px 0px;
`;

export const FilmTitle = styled.h1`
  margin-bottom: 10px;
`;

export const UserScore = styled.p`
  margin-bottom: 40px;
`;

export const OverviewTitle = styled.h3`
  margin-bottom: 10px;
`;

export const Overview = styled.p`
  /* width: 75%; */
  margin-bottom: 40px;
`;

export const GenresTitle = styled.h3`
  margin-bottom: 10px;
`;

export const Genres = styled.p`
  /* margin-bottom: 10px; */
`;

export const AdditionalContainer = styled.div`
  /* border-bottom: 1px solid #c6c6c6; */
  padding: 0;
  padding-bottom: 20px;
`;

export const AdditionalTitle = styled.h4`
  border-bottom: 1px solid #c6c6c6;
  margin-bottom: 10px;
`;

export const AdditionalList = styled.ul`
  margin-bottom: 10px;
  padding: 0;
  padding-bottom: 10px;
  list-style: none;
  line-height: 1.4;
  border-bottom: 1px solid #c6c6c6;

  > li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    &::before {
      content: '';
      width: 8px;
      height: 8px;
      margin-right: 14px;
      border-radius: 999px;
      background-color: orange;
    }
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: black;
`;
