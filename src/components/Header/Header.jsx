import PropTypes from 'prop-types';
import { HeaderStyled } from './Header.styled';

export default function Header({ children }) {
  return <HeaderStyled>{children}</HeaderStyled>;
}

Header.propTypes = {
  children: PropTypes.node,
};
