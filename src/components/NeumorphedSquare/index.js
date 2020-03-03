import React from "react";
import { Square } from "./styles";

export default function NeumorphedSquare({ cardOptions, color }) {
  const { size, radius, distance, intensity, blur } = cardOptions;
  return <Square color={color} size={size} radius={radius}></Square>;
}
