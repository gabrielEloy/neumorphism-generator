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
    background: ${({ darkMode }) => (darkMode ? "#eaeaea" : "#292828")};
    color: ${({ darkMode }) => (darkMode ? "black" : "white")};
    :hover {
      cursor: pointer;
      background: ${({ darkMode }) => (darkMode ? "#292828" : "#eaeaea")};
      color: ${({ darkMode }) => (darkMode ? "white" : "black")};
      transition: 0.3s;
    }
  }

  .selected {
    background: ${({ darkMode }) => (darkMode ? "#292828" : "#eaeaea")};
    color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  }
`;
