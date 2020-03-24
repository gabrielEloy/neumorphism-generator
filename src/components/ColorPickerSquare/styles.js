import styled from "styled-components";

export const Container = styled.div`
  input[type="color"] {
    border: none;
    width: 20px;
    height: 20px;
    -webkit-appearance: none;
    ::-webkit-color-swatch-wrapper {
      padding: 0;
    }
    ::-webkit-color-swatch {
      border: solid black 2px;
    }
    :focus {
      outline: none;
    }
  }
`;

export const AbsolutePositioningBox = styled.div`
  position: absolute;
  min-height: 330px;
  z-index: 2;
  left: 0;
  top: -200px;
  display: flex;
  justify-content: center;
  visibility: ${({visibility}) => visibility};
`;

export const ColorSquare = styled.div`
  width: 20px;
  height: 20px;
  background: ${props => props.color};
  border: solid 2px black;
`;
