import React from "react";
import { Container, ColorSquare, ColorBall } from './styles';

import TextRangeInput from '../TextRangeInput';

export default function index() {
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
  
  function colorBallFactory () {
    const rgbColorBalls = [];

    for(let i = 0; i < 3; i++){
      let color = getColorFromIndex(i);
      rgbColorBalls.push(color);
    }
    return rgbColorBalls;
  }
  return (
    <Container>
      <div className="color-square-container">
        <ColorSquare color="#ff0000"/>
      teste
      </div>

      <div className="options-container">colorBallFactory
      
      <TextRangeInput
          minRange={10}
          maxRange={100}
          value={20}
          label={}
      />
      <TextRangeInput
          minRange={10}
          maxRange={100}
          value={20}
          label={"size"}
      />
      <TextRangeInput
          minRange={10}
          maxRange={100}
          value={20}
          label={"size"}
      />
      </div>

  </Container>
  );
}
