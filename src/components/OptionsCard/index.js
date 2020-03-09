import React, { useContext } from "react";
import { CardContainer } from "./styles";
import { OptionsContext } from "../../contexts/OptionsContext";
import { lightenDarkenColor } from "../../helpers/colorHelpers";

import TextRangeInput from "../TextRangeInput";
import ColorPickerSquare from "../ColorPickerSquare";
import Tooltip from "../TooltipComponent";
import CodeContainer from '../CodeContainer';
import actionTypes from "../../actions/actionCreators";

function OptionsCard() {
  const options = useContext(OptionsContext);
  const {
    setMainColor,
    mainColor,
    cardOptions: { size, radius, distance, intensity, blur },
    optionsDispatch
  } = options;

  function handleOptionsChange(e, option) {
    const value = e.target.value;
    switch (option) {
      case "size":
        optionsDispatch({ type: actionTypes.CHANGE_SIZE, value });
        break;
      case "radius":
        optionsDispatch({ type: actionTypes.CHANGE_RADIUS, value });
        break;
      case "distance":
        optionsDispatch({ type: actionTypes.CHANGE_DISTANCE, value });
        break;
      case "intensity":
        optionsDispatch({ type: actionTypes.CHANGE_INTENSITY, value });
        break;
      case "blur":
        optionsDispatch({ type: actionTypes.CHANGE_BLUR, value });
        break;
      default:
        return;
    }
  }
  function generateBoxShadow() {
    const { blur, distance, intensity } = options.cardOptions;
    const lighterColor = lightenDarkenColor(mainColor, intensity);
    const darkerColor = lightenDarkenColor(mainColor, -intensity);

    return `${distance}px ${distance}px ${blur}px ${lighterColor},
    -${distance}px -${distance}px ${blur}px ${darkerColor}`;
  }

  const boxShadow = generateBoxShadow();
  const tooltipPositioning = 'translate(-20px, 14px)'
  return (
    <CardContainer boxShadow={boxShadow} color={mainColor} id="options-card">
      <div className="row header">
        <span className>Pick a color</span>
        <ColorPickerSquare color={mainColor} onChange={setMainColor} />
        <span>or</span>
        <input
          type="text"
          value={mainColor}
          onChange={e => setMainColor(e.target.value)}
        ></input>
      </div>
      <div className="row options">
        <Tooltip transformTooltip={tooltipPositioning} text={size}>
          <TextRangeInput
            minRange={10}
            maxRange={400}
            onChange={e => handleOptionsChange(e, "size")}
            value={size}
            label={"Size"}
          />
        </Tooltip>
        <Tooltip transformTooltip={tooltipPositioning} text={radius}>
          <TextRangeInput
            minRange={0}
            maxRange={Math.ceil(size / 2)}
            onChange={e => handleOptionsChange(e, "radius")}
            value={radius}
            label={"Radius"}
          />
        </Tooltip>
        <Tooltip transformTooltip={tooltipPositioning} text={distance}>
          <TextRangeInput
            minRange={0}
            maxRange={50}
            onChange={e => handleOptionsChange(e, "distance")}
            value={distance}
            label={"Distance"}
          />
        </Tooltip>
        <Tooltip transformTooltip={tooltipPositioning} text={intensity}>
          <TextRangeInput
            minRange={0}
            maxRange={30}
            onChange={e => handleOptionsChange(e, "intensity")}
            value={intensity}
            label={"Intensity"}
          />
        </Tooltip>
        <Tooltip transformTooltip={tooltipPositioning} text={blur}>
          <TextRangeInput
            minRange={0}
            maxRange={100}
            onChange={e => handleOptionsChange(e, "blur")}
            value={blur}
            label={"Blur"}
          />
        </Tooltip>
      </div>
      <div className="row shape">
        <span>Shape: </span>
        <div style={{ width: "80%", background: "black", height: 60 }}></div>
      </div>
      <div className="row code">
        <CodeContainer content={{boxShadow, background: mainColor, "border-radius": `${radius}px`}}/>
      </div>
    </CardContainer>
  );
}

export default OptionsCard;
