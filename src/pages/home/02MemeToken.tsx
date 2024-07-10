import { Box } from "@mui/material";
import styled from "styled-components";
import { dataTokenInfo } from "../../data/token";

const MemeToken = () => {
  return (
    <StyledComponent id="memetoken">
      {dataTokenInfo?.map((each, index) => {
        return (
          <SectionEachToken key={index}>
            <TextName>{each.value}</TextName>
            <TextValue>{each.text}</TextValue>
          </SectionEachToken>
        );
      })}
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 50px;

  margin-bottom: 130px;

  padding: 0px 200px;
  box-sizing: border-box;
  @media (max-width: 1440px) {
    padding: 0px 150px;
  }
  @media (max-width: 1280px) {
    padding: 0px 50px;
  }
  @media (max-width: 1024px) {
    padding: 0px 50px;
    grid-column-gap: 30px;
  }
  @media (max-width: 768px) {
    padding: 0px 30px;
    margin-bottom: 100px;
    grid-column-gap: 15px;
  }
  @media (max-width: 600px) {
    padding: 0px 20px;
    margin-bottom: 20px;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 15px;
  }
`;

const SectionEachToken = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
  align-items: center;
  border-radius: 6px;
  background: #d5d5d5;
  padding: 15px 0px;

  cursor: pointer;
  transition: .3s;
  &:hover{
    transform: scale(1.1);
  }

  @media (max-width: 1024px) {
    padding: 10px 0px;
  }
`;

const TextName = styled(Box)`
  color: #000;
  font-family: Karma;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  @media (max-width: 1440px) {
    font-size: 40px;
  }
  @media (max-width: 1024px) {
    font-size: 30px;
  }
  @media (max-width: 768px) {
    font-size: 25px;
  }
  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

const TextValue = styled(Box)`
  color: #000;

  font-family: Karma;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: lowercase;
  @media (max-width: 1440px) {
    font-size: 18px;
  }
  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default MemeToken;
