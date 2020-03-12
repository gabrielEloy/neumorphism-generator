import React, { useState, useReducer } from "react";
import { Container } from "./styles";

import { OptionsContext } from "./contexts/OptionsContext";
import OptionsCard from "./components/OptionsCard";
import { optionsReducer, optionsInitialState } from "./reducers/optionsReducer";
import NeumorphedSquare from "./components/NeumorphedSquare";
import { lightenDarkenColor } from './helpers/colorHelpers';
import SHAPES from './constants/shape'


export default function App() {
  const [mainColor, setMainColor] = useState("#ffb7ab");

  const [cardOptions, optionsDispatch] = useReducer(
    optionsReducer,
    optionsInitialState
  );

  const options = {
    mainColor,
    setMainColor,
    cardOptions,
    optionsDispatch
  };

  function generateBoxShadow() {
    const { blur, distance, intensity, shape } = cardOptions;
    const lighterColor = lightenDarkenColor(mainColor, intensity);
    const darkerColor = lightenDarkenColor(mainColor, -intensity);
    const pressed = shape === SHAPES.PRESSED ? 'inset' : '';

    return `${pressed} ${distance}px ${distance}px ${blur}px ${lighterColor},
    ${pressed} -${distance}px -${distance}px ${blur}px ${darkerColor}`;
  }

  const boxShadow = generateBoxShadow();
  return (
    <OptionsContext.Provider value={options}>
      <Container color={mainColor}>
        <div className="title">
          <h1>Neumorphism Generator</h1>
          <h2>Generate and understand neumorphism</h2>
        </div>
        <div className="main-content">
          <div className="content-aligner left-side">
            <NeumorphedSquare boxShadow={boxShadow} color={mainColor} cardOptions={{...cardOptions}} />
          </div>
          <div className="content-aligner right-side">
            <OptionsCard boxShadow={boxShadow}/>
          </div>
        </div>
      </Container>
    </OptionsContext.Provider>
  );
}
