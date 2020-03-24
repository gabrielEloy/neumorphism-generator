import React, { useState, useEffect, useRef } from "react";
import propTypes from "prop-types";

import { Container, ColorSquare, AbsolutePositioningBox } from "./styles";
import { SketchPicker } from 'react-color';

const ColorPickerSquare = ({ color, onChange }) => {
  const [tooltipVisibility, toggleTooltipVisibility] = useState(false);
  const node = useRef();
  
  const exitOnPressEsc = e => {
    if(e.key === 'Escape'){
      toggleTooltipVisibility(false);
    }
  }

  const exitOnClickOutside = e => {
    if(!node.current.contains(e.target)){
      toggleTooltipVisibility(false);
    }
  }
  
  useEffect(() => {
    document.addEventListener("click", exitOnClickOutside)
    document.addEventListener("keyup", exitOnPressEsc)

    return () => {
      document.removeEventListener("click", exitOnClickOutside)
      document.removeEventListener("keyup", exitOnPressEsc)
    }
  })
  
  const handleColorChange = e => {
    onChange(e.hex);
  }

  const handleTooltipVisibility = () => {
    toggleTooltipVisibility(!tooltipVisibility);
  }
  const visibility = tooltipVisibility ?
  'visible' :
  'hidden'
  return (  
    <Container ref={node}>
      <ColorSquare 
      color={color} 
      onClick={handleTooltipVisibility}
      id="colorSquare"/>
      <AbsolutePositioningBox 
      visibility={visibility} 
      id="AbsolutePositioningBox">
        <SketchPicker 
        onChange={handleColorChange}
        color={color} 
        />
      </AbsolutePositioningBox>
    </Container>
  );
};

ColorPickerSquare.propTypes = {
  color: propTypes.string.isRequired
};

export default ColorPickerSquare;
