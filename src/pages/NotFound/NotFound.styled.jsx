import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NotFoundStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  border: 0;
  padding-left: 40px;
  padding-right: 40px;
  color: #010101;
`;

export const TitleStyled = styled.h1`
  margin-bottom: 10px;
  font-size: 24px;
`;

export const TextStyled = styled.p`
  margin-bottom: 20px;
  font-size: 16px;
`;

export const ReloadButton = styled.button`
  padding: 5px;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
`;
