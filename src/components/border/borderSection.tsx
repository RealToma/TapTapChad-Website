import { Box } from "@mui/material";
import styled from "styled-components";
const BorderSection = () => {
  return <StyledComponent></StyledComponent>;
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 1px;
  margin: 50px 0px;
  background: linear-gradient(
    90deg,
    hsla(0, 0%, 0%, 0) 0%,
    hsla(0, 0%, 90%, 1) 50%,
    hsla(0, 0%, 0%, 0) 100%
  );
  @media (max-width: 1024px) {
    margin: 30px 0px;
  }
  @media (max-width: 600px) {
    margin: 20px 0px;
  }
`;

export default BorderSection;
