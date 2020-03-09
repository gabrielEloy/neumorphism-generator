import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;

  .color-square-container {
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .options-container {
    flex: 8;
  }
`;

export const ColorSquare = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color ? props.color : 'black'};
`;

export const ColorBall = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color ? props.color : 'black'};
  border-radius: 10px;
`;
