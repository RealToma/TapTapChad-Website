import { Box } from "@mui/material";
import styled from "styled-components";
import { CustomTextHead01 } from "../../components/text/textHead";
import { CustomTextBody01 } from "../../components/text/textBody";
import Marquee from "react-fast-marquee";
import { dataPressList } from "../../data/press";
import CardPress from "../../components/card/cardPress";

const Press = () => {
  return (
    <StyledComponent id="press">
      <CustomTextHead01 text="Press" color="black" />
      <CustomTextBody01
        text="Good press / Bad Press, just drop links here"
        color="black"
      />
      <SectionMarquee>
        <CustomMarquee gradient={true} speed={"50"}>
          {dataPressList?.map((each, index) => {
            return <CardPress data={each} key={index} />;
          })}
        </CustomMarquee>
      </SectionMarquee>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;

  padding: 80px 0px;
  box-sizing: border-box;
  @media (max-width: 1440px) {
    padding: 60px 0px;
  }
  @media (max-width: 1280px) {
    padding: 50px 0px;
  }
  @media (max-width: 1024px) {
    padding: 40px 0px;
  }
  @media (max-width: 768px) {
    padding: 30px 0px;
  }
  @media (max-width: 600px) {
    padding: 20px 0px;
  }
`;

const SectionMarquee = styled(Box)`
  display: flex;
  width: 100%;
  margin-top: 60px;
  @media (max-width: 1440px) {
    margin-top: 40px;
  }
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const CustomMarquee = styled(Marquee)`
  height: 130px;
  overflow: hidden !important;

  .rfm-overlay {
    --gradient-color: white !important;
    --gradient-width: 200px !important;
  }
  @media (max-width: 1440px) {
    .rfm-overlay {
    --gradient-width: 150px !important;
  }
  }
  @media (max-width: 1280px) {
    .rfm-overlay {
      --gradient-width: 50px !important;
  }
  @media (max-width: 768px) {
    .rfm-overlay {
      --gradient-width: 30px !important;
  }
  @media (max-width: 600px) {
    .rfm-overlay {
      --gradient-width: 20px !important;
  }

  /* @media (max-width: 768px) {
    height: 250px;
    .rfm-overlay {
      --gradient-width: 50px !important;
    }
  }

  @media (max-width: 430px) {
    height: 200px;
    .rfm-overlay {
      --gradient-width: 30px !important;
    }
  } */
`;

export default Press;
