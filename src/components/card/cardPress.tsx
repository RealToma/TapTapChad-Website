import { Box } from "@mui/material";
import styled from "styled-components";

const CardPress = ({ data }: any) => {
  return (
    <StyledComponent>
      <img src={data.icon} width={data.width} alt="" />
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 270px;
  height: 130px;
  justify-content: center;
  align-items: center;
  background: #d5d5d5;
  border-radius: 15px;

  margin-right: 20px;

  @media (max-width: 1024px) {
    border-radius: 12px;
  }
`;

export default CardPress;
