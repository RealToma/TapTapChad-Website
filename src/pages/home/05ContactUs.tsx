import { Box } from "@mui/material";
import styled from "styled-components";
import { SocialIconGroup } from "../../components/icons/socialIconGroup";

const ContactUs = () => {
  return (
    <StyledComponent id='contactus'>
      <TextHead>Contact Us</TextHead>
      <TextBody>
        Email us at{" "}
        <span
          style={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={() => {}}
        >
          support@himitsu
        </span>{" "}
        for any queries or support
      </TextBody>
      <SectionSocial>
        <SocialIconGroup />
      </SectionSocial>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
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
  font-size: 16px;
  line-height: 24px;

  margin-top: 30px;

  @media (max-width: 1024px) {
    margin-top: 20px;
    font-size: 14px;
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const SectionSocial = styled(Box)`
  display: flex;
  margin: 50px 0px;

  @media (max-width: 1024px) {
    margin: 30px 0px;
  }
  @media (max-width: 600px) {
    margin: 20px 0px;
  }
`;

export default ContactUs;
