import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  background: ${props => props.color};

  .title {
    flex: 2;
    margin-top: 3%;
    font-family: 'Playfair Display', serif;
    letter-spacing: 5px;
    font-size: 1.2em;
    color: ${({darkMode}) => darkMode ? '#e2e2e2' : '#423a3a'};
    h2 {
      margin-top: 20px;
    }
  }

  .main-content{
    flex: 8;
    display: flex;
    margin: 0 5% 5% 5%;
    .content-aligner{
      display: flex;
      flex: 1;
      height: 100%;
      align-items: center;
    }
    .left-side{
      position: relative;
      height: 90%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .right-side{
      
    }
  }
`;
