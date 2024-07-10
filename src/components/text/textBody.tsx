import { Box } from "@mui/material";
import styled from "styled-components";

export const CustomTextBody01 = ({ text, color, align }: any) => {
  return (
    <TextBody01 color={color} textAlign={align}>
      {text}
    </TextBody01>
  );
};

const TextBody01 = styled(Box)`
  font-family: Karma;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 1440px) {
    font-size: 18px;
  }
  @media (max-width: 1024px) {
    font-size: 16px;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    font-size: 15px;
    font-weight: 500;
  }
  @media (max-width: 600px) {
    font-size: 13px;
    font-weight: 400;
  }
`;
