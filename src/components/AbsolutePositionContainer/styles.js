import styled from "styled-components";

export const Container = styled.div`
  width: 35%;
  height: 30%;
  position: absolute;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  background: gray;
  border-radius: 10px;
  animation: showUp .3s;

  .popover-content-container {
    position: relative;
  }

  @keyframes showUp {
    from {
      opacity: 0.6;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
