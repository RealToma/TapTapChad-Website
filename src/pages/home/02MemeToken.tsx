import { Box } from "@mui/material";
import styled from "styled-components";

const MemeToken = () => {
  return <StyledComponent id="gallery"></StyledComponent>;
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 30px;
  @media (max-width: 600px) {
    margin-bottom: 20px;
  }
`;

export default MemeToken;
