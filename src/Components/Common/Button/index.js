import React from 'react';
import { StyledButton } from './style';

const Button = ({ children, ...otherprops }) => {

  return (
      <StyledButton {...otherprops} >{children}</StyledButton>
  )
}

export default Button;