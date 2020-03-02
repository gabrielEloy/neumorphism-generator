import React, { useState } from "react";
import propTypes from "prop-types";

import { Container } from "./styles";
import { AbsolutePositionContainer } from "../AbsolutePositionContainer";
import ColorBar from '../ColorBar';

const ColorPickerSquare = ({ color, onChange }) => {
  const [colorPickerVisibility, toggleColorPickerVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({
    left: -200,
    top: 0
  });

  function handleColorBoxClick(e) {
    toggleColorPickerVisible(!colorPickerVisibility);
    setToolTipPositioning({ x: e.pageX, y: e.pageY });
  }

  function setToolTipPositioning({ x, y }) {
    const mainContainer = document.getElementById("options-card");

    const finalPositions = {
      left: x - mainContainer.offsetLeft - 67,
      top: y - mainContainer.offsetTop - 193
    };

    setTooltipPosition(finalPositions);
  }
  function handleColorChange(color) {
    onChange(color.hex);
  }
  return (
    <>
      <Container color={color} onClick={handleColorBoxClick} />
      <AbsolutePositionContainer
        left={tooltipPosition.left}
        top={tooltipPosition.top}
        visibility={colorPickerVisibility}
        innerStyles={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
      >

      <ColorBar />

      </AbsolutePositionContainer>
    </>
  );
};

ColorPickerSquare.propTypes = {
  color: propTypes.string.isRequired
};

export default ColorPickerSquare;
