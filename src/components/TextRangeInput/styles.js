import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 15px;
  justify-content: space-between;
  position: relative;

  .tooltip-container{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }

  .color-label{
    width: 25%;
    margin-right: 10%;
    height: 20px;
    transform: translateY(-24px);
  }

  .tooltip-container:hover, .tooltip-text {
    visibility: visible;
  }
  .tooltip-text{
    visibility: hidden;
  }

  .text-box{
    width: 25%;
    margin-right: 10%;
  }
  .range-input{
      width: 100%;
  }

  input[type=range]{
    -webkit-appearance: none;
    background: transparent;
  }
  input[type=range]:focus {
  outline: none;
  }

  input[type=range]::-ms-track {
  width: 100%;
  cursor: pointer;
  background: transparent; 
  border-color: transparent;
  color: transparent;
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 16px;
  width: 16px;
  border-radius: 10px;
  background: #ffffff;
  cursor: pointer;
  margin-top: -5px;
}

input[type=range]::-moz-range-thumb {
  -webkit-appearance: none;
  height: 16px;
  width: 16px;
  border: none;
  border-radius: 10px;
  background: #ffffff;
  cursor: pointer;
}

input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 6px;
  cursor: pointer;
  background: #3e3737;
  border-radius: 2px;
  border: 0.2px solid #010101;
}

input[type=range]::-moz-range-track {
  width: 100%;
  height: 6px;
  cursor: pointer;
  background: #3e3737;
  border-radius: 5px;
  border: 0.2px solid #010101;
}
`;
