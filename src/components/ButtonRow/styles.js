import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  border: solid 3px black;
  margin: 10px;
  display: flex;
  border-radius: 5px;

  .row-item {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #292828;
    color: white;
    :hover{
      cursor: pointer;
      background: white;
      color: #292828;
      transition: .3s;
    }
  }

  .selected{
    background: white;
    color: #292828;
  }
`;
