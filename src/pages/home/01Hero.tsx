import { Box } from "@mui/material";
import styled from "styled-components";

const Hero = () => {
  const handleLearnMore = () => {
    // window.open("");
  };

  return (
    <StyledComponent id="home">
      <SectionLeft>
        <TextHiChad>Become a real chad</TextHiChad>
        <TextBody>
          Listen, you will need to tap on your phone screen to become a better
          Chad?
        </TextBody>
        <SectionButtonGroup>
          <ButtonYes
            onClick={() => {
              handleLearnMore();
            }}
          >
            Yes
          </ButtonYes>
          <ButtonMoreInfo
            onClick={() => {
              handleLearnMore();
            }}
          >
            More Info
          </ButtonMoreInfo>
        </SectionButtonGroup>
      </SectionLeft>
      <SectionRight>
        <img
          src="/assets/images/backgrounds/chad_main01.png"
          width={"100%"}
          alt="logo"
        />
      </SectionRight>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  padding: 150px 200px;
  box-sizing: border-box;
  @media (max-width: 1440px) {
    padding: 100px 150px;
  }
  @media (max-width: 1280px) {
    padding: 80px 50px;
  }
  @media (max-width: 1024px) {
    padding: 80px 50px;
  }
  @media (max-width: 768px) {
    padding: 0px 30px;
    margin-top: 30px;
  }
  @media (max-width: 600px) {
    padding: 0px 20px;
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SectionLeft = styled(Box)`
  display: flex;
  width: 60%;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 1280px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SectionRight = styled(Box)`
  display: flex;
  position: absolute;
  width: 100%;
  right: 5%;
  bottom: 0px;
  width: 800px;
  @media (max-width: 1620px) {
    width: 700px;
  }
  @media (max-width: 1440px) {
    width: 600px;
  }
  @media (max-width: 1280px) {
    right: -20px;
  }
  @media (max-width: 1024px) {
    width: 500px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
    position: relative;
    right: 0%;
  }
  @media (max-width: 600px) {
    margin-top: 30px;
  }
`;

const TextHiChad = styled(Box)`
  font-family: "Paytone One";
  color: black;
  font-size: 70px;
  line-height: 100%;
  @media (max-width: 1440px) {
    font-size: 50px;
  }
  @media (max-width: 1024px) {
    font-size: 40px;
  }
  @media (max-width: 768px) {
    font-size: 40px;
  }
  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

const TextBody = styled(Box)`
  font-family: Karma;
  /* word-break: break-all; */
  color: black;
  font-weight: bold;
  font-size: 30px;

  margin-top: 50px;
  @media (max-width: 1440px) {
    margin-top: 30px;
    font-size: 24px;
  }
  @media (max-width: 1024px) {
    margin-top: 30px;
    font-size: 20px;
  }
  @media (max-width: 768px) {
    margin-top: 20px;
    font-size: 18px;
  }
  @media (max-width: 600px) {
    margin-top: 10px;
    font-size: 16px;
  }
`;

const SectionButtonGroup = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 50px;
  @media (max-width: 1024px) {
    margin-top: 30px;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const ButtonYes = styled(Box)`
  display: flex;
  width: 200px;
  height: 55px;
  font-family: "Paytone One";
  font-weight: bold;
  font-size: 24px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  cursor: pointer;
  user-select: none;
  border: 1px solid black;
  color: white;
  background-color: black;
  /* clip-path: polygon(90% 0, 100% 25%, 100% 100%, 10% 100%, 0% 75%, 0 0); */
  margin-right: 30px;

  transition: 0.3s;
  &:hover {
    color: black;
    background: white;
  }

  @media (max-width: 1024px) {
    width: 150px;
    height: 45px;
    font-size: 20px;
    margin-right: 20px;
  }
  @media (max-width: 768px) {
    flex: 1;
    width: 100%;
    height: 50px;
    font-size: 18px;
    border-radius: 6px;
    margin-right: 20px;
  }
  @media (max-width: 600px) {
    height: 40px;
    font-size: 16px;
    margin-right: 15px;
  }
`;

const ButtonMoreInfo = styled(Box)`
  display: flex;
  width: 200px;
  height: 55px;
  font-family: "Paytone One";
  font-weight: bold;
  font-size: 24px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  cursor: pointer;
  user-select: none;
  border: 1px solid #d5d5d5;
  color: black;
  background-color: #d5d5d5;
  /* clip-path: polygon(90% 0, 100% 25%, 100% 100%, 10% 100%, 0% 75%, 0 0); */
  transition: 0.3s;
  &:hover {
    color: #d5d5d5;
    background: black;
  }

  @media (max-width: 1024px) {
    width: 150px;
    height: 50px;
    font-size: 20px;
  }
  @media (max-width: 768px) {
    flex: 1;
    width: 100%;
    height: 45px;
    font-size: 18px;
    border-radius: 6px;
  }
  @media (max-width: 600px) {
    height: 40px;
    font-size: 16px;
  }
`;

export default Hero;
