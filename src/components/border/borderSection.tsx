import { Box } from "@mui/material";
import styled from "styled-components";
const BorderSection = () => {
  return (
    <StyledComponent>
      <Line></Line>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  margin-bottom: 50px;

  padding: 0px 200px;
  box-sizing: border-box;
  @media (max-width: 1440px) {
    padding: 0px 150px;
  }
  @media (max-width: 1280px) {
    padding: 0px 50px;
    margin-bottom: 30px;
  }
  @media (max-width: 768px) {
    padding: 0px 30px;
  }
  @media (max-width: 600px) {
    padding: 0px 20px;
    margin-bottom: 20px;
  }
`;

const Line = styled(Box)`
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(212, 212, 212, 1) 0%,
    rgba(0, 0, 0, 1) 50%,
    rgba(212, 212, 212, 1) 100%
  );
`;

export default BorderSection;
