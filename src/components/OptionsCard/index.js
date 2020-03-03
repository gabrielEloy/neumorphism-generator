import React, { useContext } from "react";
import { CardContainer } from "./styles";
import { OptionsContext } from "../../contexts/OptionsContext";

import TextRangeInput from "../TextRangeInput";
import ColorPickerSquare from "../ColorPickerSquare";
import actionTypes from '../../actions/actionCreators';

function OptionsCard() {
  const options = useContext(OptionsContext);
  const {
    setMainColor,
    mainColor,
    cardOptions: { size, radius, distance, intensity, blur },
    optionsDispatch
  } = options;

  function handleOptionsChange(e, option){
    const value = e.target.value;
    switch(option){
      case 'size':
        optionsDispatch({type: actionTypes.CHANGE_SIZE, value});
        break;
      case 'radius':
        optionsDispatch({type: actionTypes.CHANGE_RADIUS, value});
        break;
      case 'distance':
        optionsDispatch({type: actionTypes.CHANGE_DISTANCE, value});
        break;
      case 'intensity':
        optionsDispatch({type: actionTypes.CHANGE_INTENSITY, value});
        break;
      case 'blur':
        optionsDispatch({type: actionTypes.CHANGE_BLUR, value});
        break;
    }
  }

  return (
    <CardContainer id="options-card">
      <div className="row header">
        <span className="">Pick a color</span>
        <ColorPickerSquare color={mainColor} onChange={setMainColor} />
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
          onChange={e => handleOptionsChange(e, 'size')}
          value={size}
          label={"Size"}
        />
        <TextRangeInput
          minRange={10}
          maxRange={200}
          onChange={e => handleOptionsChange(e, 'radius')}
          value={radius}
          label={"Radius"}
        />
        <TextRangeInput
          minRange={10}
          maxRange={200}
          onChange={e => handleOptionsChange(e, 'distance')}
          value={distance}
          label={"Distance"}
        />
        <TextRangeInput
          minRange={10}
          maxRange={200}
          onChange={e => handleOptionsChange(e, 'intensity')}
          value={intensity}
          label={"Intensity"}
        />
        <TextRangeInput
          minRange={10}
          maxRange={200}
          onChange={e => handleOptionsChange(e, 'blur')}
          value={blur}
          label={"Blur"}
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
