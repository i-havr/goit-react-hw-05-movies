import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 60px;
  margin-bottom: 20px;
  padding: 20px 40px;
  background: grey;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  color: black;
  &:not(:last-child) {
    margin-right: 20px;
  }

  &.active {
    color: orange;
  }

  :hover:not(.active) {
    color: #fff;
  }
`;
