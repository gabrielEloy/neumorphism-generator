import React, { useState } from "react";
import { Container, ColorSquare, ColorBall } from './styles';

import TextRangeInput from '../TextRangeInput';

export default function ColorBar() {
  const [colorPicker, setColorPicker] = useState(colorPickerFactory());
  const [colors, setRGBColors] = useState({
    red: 0,
    green: 0,
    blue: 0,
    Hex: ''
  })

  
  function getColorFromIndex(i){
    switch(i){
      case 0:
        return 'red';
      case 1:
        return 'green';
      case 2:
        return 'blue';
    }
  }
  
  function colorPickerFactory () {
    const rgbColorBalls = [];

    for(let i = 0; i < 3; i++){
      const currentColor = getColorFromIndex(i);
      rgbColorBalls.push({
        minRange: 0,
        onChange: (e) => handleColorChange(e, currentColor),
        colorName: currentColor,
        maxRange: 255,
        label: <ColorBall color={currentColor}/>
      });
    }
    return rgbColorBalls;
  };

  function handleColorChange(e, currentColor) {
    setRGBColors({...colors, [currentColor]: parseInt(e.target.value)})
  }
  return (
    <Container>
      <div className="color-square-container">
        <ColorSquare color="#ff0000"/>
      teste
      </div>

      <div className="options-container">
      
      {colorPicker.map((color ) => (
        <TextRangeInput
          minRange={color.minRange}
          maxRange={color.maxRange}
          value={colors[color.colorName]}
          onChange={color.onChange}
          label={color.label} />))}
      </div>

  </Container>
  );
}
