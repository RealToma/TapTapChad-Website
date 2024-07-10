import { Box } from "@mui/material";
import styled from "styled-components";
const Footer = () => {
  return (
    <StyledComponent>© 2024 All rights reserved. TapTapChad</StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 70px;
  background-color: black;
  align-items: center;
  justify-content: center;
  color: #8c8b8b;
  font-size: 16px;
  font-weight: bold;
  font-family: Karma;
  @media (max-width: 1280px) {
    height: 60px;
    font-size: 14px;
  }
  @media (max-width: 768px) {
    height: 50px;
    font-size: 12px;
  }
`;

export default Footer;
