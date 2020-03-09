import React, { useState, useReducer } from "react";
import { Container } from "./styles";

import { OptionsContext } from "./contexts/OptionsContext";
import OptionsCard from "./components/OptionsCard";
import { optionsReducer, optionsInitialState } from "./reducers/optionsReducer";
import NeumorphedSquare from "./components/NeumorphedSquare";

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
  return (
    <OptionsContext.Provider value={options}>
      <Container color={mainColor}>
        <div className="title">
          <h1>Neumorphism Generator</h1>
          <h2>Generate and understand neumorphism</h2>
        </div>
        <div className="main-content">
          <div className="content-aligner left-side">
            <NeumorphedSquare color={mainColor} cardOptions={{...cardOptions}} />
          </div>
          <div className="content-aligner right-side">
            <OptionsCard />
          </div>
        </div>
      </Container>
    </OptionsContext.Provider>
  );
}
