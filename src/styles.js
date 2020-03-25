import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  background: ${props => props.color};

  .title {
    flex: 2;
    margin-top: 3%;
    font-family: "Playfair Display", serif;
    letter-spacing: 5px;
    font-size: 1.2em;
    color: ${({ darkMode }) => (darkMode ? "#e2e2e2" : "#423a3a")};
    h2 {
      margin-top: 20px;
    }
  }

  .main-content {
    flex: 8;
    display: flex;
    margin: 0 5% 5% 5%;

    @media screen and (max-width: 650px) {
      flex-direction: column;
      align-items: center;
    }
    .content-aligner {
      display: flex;
      flex: 1;
      height: 100%;
      align-items: center;
    }
    .left-side {
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      @media screen and (max-width: 650px) {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 140px;
      }
    }
    .right-side {
      @media screen and (max-width: 650px) {
        display: flex;
        flex: 1;
        justify-content: center;
        margin-top: 200px;
        
      }
    }
  }
`;
