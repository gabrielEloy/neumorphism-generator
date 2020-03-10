import React from "react";
import { Square } from "./styles";

import propTypes from 'prop-types';

export default function NeumorphedSquare({ cardOptions, color, boxShadow }) {
  const { size, radius } = cardOptions;
  return (
    <Square
      color={color}
      size={size}
      radius={radius}
      boxShadow={boxShadow}
    ></Square>
  );
}

NeumorphedSquare.propTypes = {
  cardOptions: propTypes.object.isRequired,
  color: propTypes.string.isRequired,
  boxShadow: propTypes.string.isRequired
}
