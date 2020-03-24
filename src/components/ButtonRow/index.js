import React from "react";
import { Container } from "./styles";

import propTypes from "prop-types";

export default function ButtonRow({ buttons, selected }) {
  return (
    <Container>
      {buttons.map(button => (
        <div key={button.index} className={selected === button.index ? "row-item selected" : "row-item"} onClick={button.onClick}>
          {button.Content}
        </div>
      ))}
    </Container>
  );
}

ButtonRow.propTypes = {
  buttons: propTypes.arrayOf(
    propTypes.shape({
      onClick: propTypes.func.isRequired,
      Content: propTypes.element
    })
  ),
  selected: propTypes.oneOfType([propTypes.string, propTypes.number])
};
