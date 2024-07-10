import { Box } from "@mui/material";
import styled from "styled-components";

const About = () => {
  return (
    <StyledComponent id="about">
      <SectionLeft>
        <TextHead>The Legend of $HIM</TextHead>
        <TextBody>
          A movement born in the trenches… A die hard community with crypto
          comviction… We are the $HIM cult and here’s our Lore on the Solana
          Blockchain. The original dev launched the token from 5k, the token
          pumped to 200k and dumped all the way below 50k. On our community
          voice chat, a legendary $HIM offered to take over the project as a
          Community Takeover and fund everything from his own pocket, leading to
          tens of thousands of dollars of personal expenses. Negotiations
          began…. The original owner agreed to dump his 6% ownership stake on
          the market which dropped us even lower than 25k market cap. Then the
          legendary $HIM takeover began and the $HIM cult was born at that
          moment. Everything was transferred to the community and out of the
          trenches, $HIM was born. Since then: 2000+ holders, ATH 1.7 million An
          average of 100+ people in community voice chat since Community Take
          Over 20 free culture promotions by promoters and increasing. Trench
          Warfare Gorilla Marketing coming to a billboard near you… Additional
          Promotion in the holster to be rolled out soon…
        </TextBody>
        {/* <ButtonBuy>Learn More</ButtonBuy> */}
      </SectionLeft>
      <SectionRight>
        <img
          src="/assets/images/icons/logo.png"
          width={"100%"}
          height={"100%"}
          alt="logo"
        />
      </SectionRight>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const SectionLeft = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 200px;
  @media (max-width: 1440px) {
    margin-right: 50px;
  }
  @media (max-width: 1024px) {
    margin-right: 30px;
  }
`;

const SectionRight = styled(Box)`
  display: flex;
  width: 500px;
  height: 500px;

  @media (max-width: 1440px) {
    width: 400px;
    height: 400px;
  }
  @media (max-width: 1024px) {
    width: 300px;
    height: 300px;
  }
  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
    margin-top: 30px;
  }
`;

const TextHead = styled(Box)`
  font-family: Belleza;
  color: white;
  font-size: 60px;
  @media (max-width: 1024px) {
    font-size: 50px;
  }
  @media (max-width: 768px) {
    font-size: 40px;
  }
  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

const TextBody = styled(Box)`
  font-family: Belleza;
  color: white;
  font-size: 18px;
  line-height: 24px;

  margin-top: 50px;

  @media (max-width: 1024px) {
    margin-top: 30px;
    font-size: 16px;
  }
  @media (max-width: 600px) {
    margin-top: 20px;
    font-size: 14px;
  }
`;

const ButtonBuy = styled(Box)`
  display: flex;
  width: 130px;
  height: 45px;
  font-family: Belleza;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  cursor: pointer;
  user-select: none;
  border: 1px solid white;
  background-color: white;
  /* clip-path: polygon(90% 0, 100% 25%, 100% 100%, 10% 100%, 0% 75%, 0 0); */
  margin-top: 50px;
  transition: 0.3s;
  &:hover {
    color: white;
    background: black;
  }

  @media (max-width: 1024px) {
    margin-top: 30px;
    width: 120px;
    height: 40px;
  }
  @media (max-width: 600px) {
    width: 100px;
    height: 35px;
  }
`;

export default About;
