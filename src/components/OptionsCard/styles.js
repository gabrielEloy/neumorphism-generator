import styled from "styled-components";

export const CardContainer = styled.div`
  height: 75%;
  padding: 20px 30px;
  border-radius: 30px;
  background: #8e8ea5;
  width: 60%;
  min-width: 360px;
  min-height: 480px;
  display: flex;
  flex-direction: column;
  position: relative;
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
