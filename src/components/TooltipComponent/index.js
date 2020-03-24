import React from 'react'
import propTypes from 'prop-types';

import { TooltipContainer, TooltipText } from './styles';

export default function TooltipComponent({ children, text, transformTooltip }) {
  return (
    <TooltipContainer>
      {children}
      <TooltipText transformTooltip={transformTooltip}>
        <span className="tooltip-text">{text}</span>
      </TooltipText>
    </TooltipContainer>
  )
}

TooltipComponent.propTypes =  {
  children: propTypes.element.isRequired,
  text: propTypes.oneOfType([propTypes.string,propTypes.number]).isRequired,
  transformTooltip: propTypes.string
}
