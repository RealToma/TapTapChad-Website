import { Box } from "@mui/material";
import styled from "styled-components";

const Home = () => {
  return (
    <StyledComponent>
      Coming Soon
      <br />
      7.7.24
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  font-family: Belleza;
  text-align: center;
  align-items: center;
  color: white;
  font-size: 100px;

  text-shadow: 0px 0px 12px #ffffffcc;
  animation: aniText01 3s ease;
  @keyframes aniText01 {
    0% {
      text-shadow: 0px 0px 0px #ffffffcc;
    }
    0% {
      text-shadow: 0px 0px 80px #ffffffcc;
    }
    100% {
      text-shadow: 0px 0px 12px #ffffffcc;
    }
  }
`;

export default Home;
