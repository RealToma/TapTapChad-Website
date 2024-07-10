import { Box } from "@mui/material";
import styled from "styled-components";
import { SocialIconGroup } from "../../components/icons/socialIconGroup";

const Contact = () => {
  return (
    <StyledComponent id="contact">
      <BackImage01>
        <img
          src="/assets/images/backgrounds/chad_main01.png"
          width={"100%"}
          alt=""
        />
      </BackImage01>
      <TextHead>Contact Us</TextHead>
      <TextBody>
        Email us at&nbsp;&nbsp;
        <span
          style={{
            textDecoration: "underline",
            cursor: "pointer",
            // color: "#6E6E6E",
          }}
          onClick={() => {}}
        >
          chadceo@taptapchad.com
        </span>
        &nbsp;&nbsp; for any <br />
        queries or support
      </TextBody>
      <SectionSocial>
        <SocialIconGroup />
      </SectionSocial>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  align-items: center;

  margin-top: 100px;
  @media (max-width: 1280px) {
    margin-top: 50px;
  }
  @media (max-width: 768px) {
    margin-top: 70px;
  }
  @media (max-width: 600px) {
    margin-top: 60px;
  }
`;

const TextHead = styled(Box)`
  font-family: "Paytone One";
  color: black;
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
  font-family: "Paytone One";
  color: black;
  font-size: 18px;
  text-align: center;

  margin-top: 30px;

  @media (max-width: 1024px) {
    margin-top: 20px;
    font-size: 14px;
  }
  @media (max-width: 600px) {
    font-size: 12px;
    margin-top: 10px;
  }
  @media (max-width: 350px) {
    font-size: 10px;
  }
`;

const SectionSocial = styled(Box)`
  display: flex;
  margin: 50px 0px;

  @media (max-width: 1024px) {
    margin: 40px 0px;
  }
  @media (max-width: 768px) {
    margin: 30px 0px;
  }
  @media (max-width: 600px) {
    margin: 20px 0px;
  }
`;

const BackImage01 = styled(Box)`
  position: absolute;
  width: 650px;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.3;
  z-index: -1;

  @media (max-width: 1280px) {
    width: 550px;
    bottom: -30px;
  }
  @media (max-width: 1024px) {
    width: 450px;
    bottom: -30px;
  }

  @media (max-width: 600px) {
    width: 350px;
    bottom:-30px;
  }
`;

export default Contact;
