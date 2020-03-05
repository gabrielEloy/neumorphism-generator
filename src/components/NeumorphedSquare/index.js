import React from "react";
import { Square } from "./styles";

import { lightenDarkenColor } from '../../helpers/colorHelpers';

export default function NeumorphedSquare({ cardOptions, color }) {
  const { size, radius, distance, intensity, blur } = cardOptions;
  const darkerColor = lightenDarkenColor(color, -intensity)
  const lighterColor = lightenDarkenColor(color, intensity)
  return (
    <Square
      color={color}
      size={size}
      radius={radius}
      distance={distance}
      blur={blur}
      lighterColor={lighterColor}
      darkerColor={darkerColor}
    ></Square>
  );
}
