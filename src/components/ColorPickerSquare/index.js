import React from "react";
import propTypes from "prop-types";

import { Container } from "./styles";

const ColorPickerSquare = ({ color, onChange }) => {
  console.log(onChange)
  return (
    <Container>
      <input type="color" value={color} onChange={ e=> onChange(e.target.value)}></input>
    </Container>
  );
};

ColorPickerSquare.propTypes = {
  color: propTypes.string.isRequired
};

export default ColorPickerSquare;
