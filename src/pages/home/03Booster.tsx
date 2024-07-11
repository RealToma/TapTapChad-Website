import { Box } from "@mui/material";
import styled from "styled-components";
import { CustomTextHead01 } from "../../components/text/textHead";
import { CustomTextBody01 } from "../../components/text/textBody";

const TapTapChad = () => {
  return (
    <StyledComponent id="booster">
      <CustomTextHead01
        color={"white"}
        text="POINT BOOSTER PROGRAM"
        align={"center"}
      />
      <CustomTextBody01
        color={"white"}
        align={"center"}
        text="Join our POINT BOOSTER PROGRAM to be part of something big, and keep an eye out for upcoming airdrops to fill your treasure chest with valuable coins!"
      />
      <SectionSubmit>
        <SectionInput>
          <InputEmail component={"input"} placeholder="Entry Your Email" />
        </SectionInput>
        <ButtonSubmit>Submit</ButtonSubmit>
      </SectionSubmit>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background-color: black;

  padding: 50px 300px;
  box-sizing: border-box;
  @media (max-width: 1440px) {
    padding: 40px 250px;
  }
  @media (max-width: 1280px) {
    padding: 35px 200px;
  }
  @media (max-width: 1024px) {
    padding: 30px 100px;
  }
  @media (max-width: 768px) {
    padding: 25px 30px;
  }
  @media (max-width: 600px) {
    padding: 20px 20px;
  }
`;

const SectionSubmit = styled(Box)`
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  margin-top: 30px;

  @media (max-width: 1024px) {
    height: 50px;
  }
  @media (max-width: 768px) {
    height: 40px;
  }
  @media (max-width: 600px) {
    height: 35px;
  }
`;

const SectionInput = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  border-radius: 6px;
  border: 1px solid #fff;
  background-color: black;
  padding: 0px 30px;
  box-sizing: border-box;
  margin-right: 50px;

  @media (max-width: 1024px) {
    padding: 0px 25px;
    margin-right: 40px;
  }
  @media (max-width: 768px) {
    padding: 0px 20px;
    margin-right: 30px;
  }
  @media (max-width: 600px) {
    padding: 0px 10px;
    margin-right: 20px;
  }
  @media (max-width: 450px) {
    margin-right: 10px;
  }
`;

const InputEmail = styled(Box)`
  display: flex;
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
  color: white;
  font-family: Karma;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 1024px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const ButtonSubmit = styled(Box)`
  display: flex;
  width: 300px;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border: 1px solid #fff;
  background: #fff;
  font-family: Karma;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: black;

  cursor: pointer;
  user-select: none;
  transition: 300ms;
  &:hover {
    background-color: black;
    color: white;
  }

  @media (max-width: 1440px) {
    width: 250px;
    font-size: 19px;
  }
  @media (max-width: 1024px) {
    width: 200px;
    font-size: 18px;
  }
  @media (max-width: 768px) {
    width: 150px;
    font-size: 16px;
  }
  @media (max-width: 600px) {
    width: 130px;
    font-size: 14px;
  }
  @media (max-width: 450px) {
    width: 100px;
    font-size: 14px;
  }
`;

export default TapTapChad;
