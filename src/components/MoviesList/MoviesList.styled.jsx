import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TrendingTitleStyled = styled.h1`
  font-size: 24px;
  padding: 0 0 0 40px;
`;

export const MoviesListStyled = styled.ul`
  padding: 20px 40px;
  list-style: none;
  line-height: 1.4;
`;

export const MovieListItemWrapper = styled.li`
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
`;

export const MovieName = styled.p`
  font-size: 16px;
  color: black;
  &:hover,
  &:focus {
    text-decoration: underline orange;
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
`;
