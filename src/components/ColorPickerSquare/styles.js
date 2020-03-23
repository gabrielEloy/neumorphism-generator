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
    :focus{
      outline: none;
    }
  }
`;
