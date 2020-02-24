import React, { useState } from "react";
import { Container } from "./styles";

import { OptionsContext } from './contexts/OptionsContext';
import OptionsCard from "./components/OptionsCard";

export default function App() {
    const [mainColor, setMainColor] = useState('#ff0000');


    const options = {
      mainColor,
      setMainColor
    }
  return (
    <OptionsContext.Provider value={options}>
    <Container>
      <div className="title">
        <h1>Neumorphism Generator</h1>
        <h2>Generate and understand neumorphism</h2>
      </div>
      <div className="main-content">
        <div className="content-aligner left-side"></div>
        <div className="content-aligner right-side">
          <OptionsCard />
        </div>
      </div>
    </Container>
    </OptionsContext.Provider>
  );
}
