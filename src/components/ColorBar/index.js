import React, { useState, useEffect, useContext } from "react";
import { Container, ColorSquare, ColorBall } from './styles';
import { OptionsContext } from '../../contexts/OptionsContext';

import TextRangeInput from '../TextRangeInput';
import { RGBtoHex, hexToRGB } from '../../helpers/colorHelpers';

export default function ColorBar() {
  const options = useContext(OptionsContext);
  const [colorPicker, setColorPicker] = useState(colorPickerFactory());
  const [colors, setRGBColors] = useState(hexToRGB(options.mainColor));

  useEffect(() => {
    const { red, green, blue } = colors;
    const { setMainColor } = options;
    const hexColor = RGBtoHex(red, green, blue);
    setMainColor(hexColor);
  }, [colors])


  
  function getColorFromIndex(i){
    switch(i){
      case 0:
        return 'red';
      case 1:
        return 'green';
      case 2:
        return 'blue';
      default: 
        return;
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
    const value = e.target.value;
    setRGBColors(prevState => {
      return {...prevState, [currentColor]: value}
    })
  };
  const { mainColor } = options;
  return (
    <Container>
      <div className="color-square-container">
        <ColorSquare color={mainColor}/>
      {mainColor}
      </div>

      <div className="options-container">
      
      {colorPicker.map((color) => (
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
