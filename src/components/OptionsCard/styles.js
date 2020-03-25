import styled from "styled-components";

export const CardContainer = styled.div`
  height: 75%;
  padding: 20px 30px;
  border-radius: 30px;
  background: #8e8ea5;
  width: 60%;
  min-height: 480px;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: ${props => props.boxShadow};
  background-color: ${props => props.color};
  color: ${({darkMode}) => darkMode ? 'white' : 'black'};
  .row{
    display: flex;
    align-items: center;
    text-align: left;
    flex-direction: column;
    span{
      margin-left: 3%;
    }
  }
  .header{
    flex: 1;
    flex-direction: row;
    span{
      margin: 0 5px;
    }
    input[type="text"]{
      text-align: center;      
      border: solid 2px black;
      height: 22px;
      width: 50%;
      font-size: 1.3em;
      letter-spacing: 0.02em;
    }
  }
  .options{
    flex: 4;
    display: flex;
    align-items: flex-start;
  }
  .shape{
    flex: 2;
  }
  .code{
    flex: 2;
  }
`;
