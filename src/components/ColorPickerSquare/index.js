import React, { useState } from "react";
import propTypes from "prop-types";

import { Container } from "./styles";
import { SketchPicker } from "react-color";

const ColorPickerSquare = ({ color, onChange }) => {
  const [colorPickerVisibility, toggleColorPickerVisible] = useState(false)

  function handleColorPickerVisibility (){
    toggleColorPickerVisible(!colorPickerVisibility)
  }
  function handleColorChange(color) {
    onChange(color.hex);
  }
  return (
    <>
      <Container
      color={color}
      onClick={handleColorPickerVisibility} />
      {colorPickerVisibility && 
      <SketchPicker
      onChange={handleColorChange}
      color={color}
      />}
    </>
  );
};

ColorPickerSquare.propTypes = {
  color: propTypes.string.isRequired
};

export default ColorPickerSquare;
