import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: black;
  /* height: 90px; */
  align-self: center;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

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
