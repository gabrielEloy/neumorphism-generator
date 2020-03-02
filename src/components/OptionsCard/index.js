import React, { useContext } from "react";
import { CardContainer } from "./styles";
import { OptionsContext } from "../../contexts/OptionsContext";

import TextRangeInput from "../TextRangeInput";
import ColorPickerSquare from '../ColorPickerSquare'

function OptionsCard() {
  const options = useContext(OptionsContext);
  const { setMainColor, mainColor } = options;
  return (
    <CardContainer
    id="options-card">
      <div className="row header">
        <span className="">Pick a color</span>
        <ColorPickerSquare 
        color={mainColor}
        onChange={setMainColor}/>
        <span> or</span>
        <input
          type="text"
          value={mainColor}
          onChange={e => setMainColor(e.target.value)}
        ></input>
      </div>
      <div className="row options">
        <TextRangeInput
          minRange={10}
          maxRange={200}
          onChange={() => console.log('yet to be developed')}
          value={20}
          label={"size"}
        />
        <TextRangeInput
          minRange={10}
          maxRange={200}
          onChange={() => console.log('yet to be developed')}
          value={20}
          label={"size"}
        />
        <TextRangeInput
          minRange={10}
          maxRange={200}
          onChange={() => console.log('yet to be developed')}
          value={20}
          label={"size"}
        />
        <TextRangeInput
          minRange={10}
          maxRange={200}
          onChange={() => console.log('yet to be developed')}
          value={20}
          label={"size"}
        />
        <TextRangeInput
          minRange={10}
          maxRange={200}
          onChange={() => console.log('yet to be developed')}
          value={20}
          label={"size"}
        />
      </div>
      <div className="row shape">
        <span>Shape: </span>
        <div style={{ width: "80%", background: "black", height: 60 }}></div>
      </div>
      <div className="row code">
      <div style={{ width: "80%", background: "black", height: 90 }}></div>
      </div>
    </CardContainer>
  );
}

export default OptionsCard;
