import { Box } from "@mui/material";
import styled from "styled-components";

export const CustomTextHead01 = ({ text, color, align }: any) => {
  return <TextHead01 color={color} textAlign={align}>{text}</TextHead01>;
};

const TextHead01 = styled(Box)`
  font-family: "Paytone One";
  font-size: 55px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 20px;
  @media (max-width: 1440px) {
    font-size: 50px;
    margin-bottom: 18px;
  }
  @media (max-width: 1024px) {
    font-size: 40px;
    margin-bottom: 15px;
  }
  @media (max-width: 768px) {
    font-size: 30px;
    margin-bottom: 12px;
  }
  @media (max-width: 600px) {
    font-size: 25px;
    margin-bottom: 10px;
  }
`;
