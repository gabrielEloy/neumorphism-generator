import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: ${({darkMode}) => darkMode ? '#eaeaea' : '#292828'};
  align-self: center;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  border: ${({darkMode}) => `solid 3px ${darkMode ? 'white' : 'black'}`};

  .copy-button{
    background: ${({darkMode}) => darkMode ? 'black' : 'white'};
    color: ${({darkMode}) => darkMode ? 'white' : 'black'};
    position: absolute;
    right:  3%;
    top: 10%;
    padding: 5px;
    border: none;
    border-radius: 3px;
    :hover{
      cursor: pointer;
    }
    :focus{
      outline: none;
    }
  }

  .property-container {
    width: 70%;
    margin-left: 8%;
    margin: 1% 7%;
    .property-name {
      color: ${({darkMode}) => darkMode ? '#4c0e4acf' : '#8080bb'};
    }
    .property-content {
      color: ${({darkMode}) => darkMode ? 'black' : 'white'};
    }
  }
`;
