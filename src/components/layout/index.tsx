import { Box } from "@mui/material";
import styled from "styled-components";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }: any) => {
  return (
    <StyledComponent>
      <BackImage></BackImage>
      <InsideComponent>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </InsideComponent>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  position: relative;
  width: 100%;
  background-color: black;
  flex-direction: column;
  overflow: hidden;
`;

const InsideComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  animation: backAnimation1 0.5s ease-out;
  @keyframes backAnimation1 {
    0% {
      opacity: 0;
    }
    /* 50% {
      transform: scale(2);
    } */
    100% {
      opacity: 1;
    }
  }
  z-index: 10;
`;

const Content = styled(Box)`
  display: flex;
  width: 100%;
  padding: 0px 200px;
  box-sizing: border-box;
  @media (max-width: 1440px) {
    padding: 0px 100px;
  }
  @media (max-width: 1024px) {
    padding: 0px 50px;
  }
  @media (max-width: 700px) {
    padding: 0px 30px;
  }
  @media (max-width: 600px) {
    padding: 0px 20px;
  }
`;

// const BackGradient = styled(Box)`
//   display: flex;
//   position: absolute;
//   top: 0px;
//   left: 0px;
//   z-index: 1;
// `;

// const BackLogoImg = styled(Box)`
//   display: flex;
//   position: absolute;
//   top: 0px;
//   right: 0px;
//   z-index: 1;
// `;
const BackImage = styled(Box)`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100vh;
  background-image: url("/assets/images/backgrounds/main01.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  top: 0px;
  left: 0px;
  z-index: 10;
`;

export default Layout;
