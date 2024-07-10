import { Box } from "@mui/material";
import styled from "styled-components";
import { dataSocialLink } from "../../data/links";

export const SocialIconGroup = () => {
  return (
    <StyledComponent>
      {dataSocialLink?.map((each, index) => {
        return (
          <a
            href={each.link}
            style={{
              textDecoration: "none",
            }}
            key={index}
            target="_blank"
            rel="noreferrer"
          >
            <ButtonSocial>{each.icon}</ButtonSocial>
          </a>
        );
      })}
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  align-items: center;
`;

const ButtonSocial = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  aspect-ratio: 1;
  border-radius: 100%;
  border: 1px solid white;
  color: white;
  font-size: 20px;
  background-color: black;

  margin: 0px 20px;

  transition: 0.3s;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: black;
    background-color: white;
  }

  @media (max-width: 1440px) {
    margin: 0px 10px;
  }
  @media (max-width: 1024px) {
    margin: 0px 5px;
    width: 35px;
    font-size: 15px;
  }
`;
