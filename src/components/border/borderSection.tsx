import { Box } from "@mui/material";
import styled from "styled-components";
const BorderSection = () => {
  return <StyledComponent></StyledComponent>;
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 1px;
  margin-bottom: 50px;
  background: linear-gradient(
    90deg,
    rgba(212, 212, 212, 1) 0%,
    rgba(0, 0, 0, 1) 50%,
    rgba(212, 212, 212, 1) 100%
  );
  @media (max-width: 1024px) {
    margin-bottom: 30px;
  }
  @media (max-width: 600px) {
    margin-bottom: 20px;
  }
`;

export default BorderSection;
