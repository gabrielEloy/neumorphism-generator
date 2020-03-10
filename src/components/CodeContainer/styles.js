import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #292828;
  align-self: center;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  border: solid 3px black;

  .copy-button{
    background: white;
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
      color: #8080bb;
    }
    .property-content {
      color: white;
    }
  }
`;
