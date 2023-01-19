import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styled';

export const Button = ({ children }) => {
  return <ButtonStyled type="button">{children}</ButtonStyled>;
};

Button.defaultProps = {
  onClick: () => null,
  children: null,
};

Button.propTypes = {
  children: PropTypes.node,
};
