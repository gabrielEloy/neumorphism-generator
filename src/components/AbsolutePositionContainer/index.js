import React from "react";
import { Container } from './styles';

import propTypes from 'prop-types';

export const AbsolutePositionContainer = ({left, top, children, visibility, innerStyles}) => {
  if(visibility){
    return (
    <Container
      left={left}
      top={top}
      style={innerStyles}>
        <div className="popover-content-container">
          {children && children}
        </div>
      </Container>)
  };
  return null;
};


AbsolutePositionContainer.propTypes = {
  left: propTypes.number.isRequired,
  top: propTypes.number.isRequired,
  visibility: propTypes.bool.isRequired,
  children: propTypes.element,
  innerStyles: propTypes.object
}