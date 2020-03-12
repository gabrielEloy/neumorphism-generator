import React from "react";
import { Square } from "./styles";
import { generateBackground } from "../../helpers/shapes";

import propTypes from "prop-types";

export default function NeumorphedSquare({ cardOptions, color, boxShadow }) {
  const { size, radius, shape } = cardOptions;
  const backgroundColor = generateBackground(color, shape);
  return (
    <Square
      color={backgroundColor}
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
};
