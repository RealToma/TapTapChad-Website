import { Box } from "@mui/material";
import styled from "styled-components";

const Hero = () => {
  const handleLearnMore = () => {
    window.open(
      "https://dexscreener.com/solana/AfUZB4Cvz9aPeAKs1D6qP1WwCcjYKWYaCQpHPu86xCD6"
    );
  };

  return (
    <StyledComponent id="#home">
      <SectionLeft>
        <TextHead>himistu</TextHead>
        <TextBody>
          Who is $HIM? Our animal is a cat. The Cat Is Black. We are $HIM, a
          community of beasts and people who believe in the next big cultural
          movement in crypto. Diamond Handz, Balls of Steel, Conviction running
          in our Veins. We are $HIM, same animal different beasts. Join the
          culture, buy and hold $HIM. $HIM Culture, $HIM Aesthetics, $HIM Cult.
          Believe in something. Believe in $HIM.
          <br />
          You can be $HIM:
          https://dexscreener.com/solana/AfUZB4Cvz9aPeAKs1D6qP1WwCcjYKWYaCQpHPu86xCD6
        </TextBody>
        <ButtonBuy
          onClick={() => {
            handleLearnMore();
          }}
        >
          Learn More
        </ButtonBuy>
      </SectionLeft>
      <SectionRight>
        <img
          src="/assets/images/backgrounds/temp01.png"
          width={"100%"}
          alt="logo"
        />
      </SectionRight>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  margin-top: 50px;

  @media (max-width: 768px) {
    margin-top: 30px;
  }
  @media (max-width: 600px) {
    margin-top: 20px;
    flex-direction: column;
  }
`;

const SectionLeft = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 100px;
  @media (max-width: 1440px) {
    margin-right: 50px;
  }
  @media (max-width: 1024px) {
    margin-right: 30px;
  }
`;

const SectionRight = styled(Box)`
  display: flex;
  width: 600px;

  @media (max-width: 1440px) {
    width: 500px;
  }
  @media (max-width: 1024px) {
    width: 400px;
  }
  @media (max-width: 768px) {
    width: 300px;
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
  word-break: break-all;
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

export default Hero;
