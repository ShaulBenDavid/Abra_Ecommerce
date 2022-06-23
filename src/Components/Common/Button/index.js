import React from 'react';
import { StyledButton } from './style';

const Button = ({ className, children, ...otherprops }) => {

  return (
      <StyledButton {...otherprops} className={className}>{children}</StyledButton>
  )
}

export default Button;