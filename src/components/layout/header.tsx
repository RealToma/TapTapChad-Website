import { Box } from "@mui/material";
import styled from "styled-components";
import { useState } from "react";
import { dataMenuLink } from "../../data/links";
import { SocialIconGroup } from "../icons/socialIconGroup";
import Slide from "@mui/material/Slide";

const Header = () => {
  const [clickedLink, setClickedLink] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  return (
    <StyledComponent>
      <LogoIcon>
        <img src="/assets/images/icons/logo.png" width={"100%"} alt="logo" />
      </LogoIcon>
      <SectionLinks>
        {dataMenuLink?.map((each, index) => {
          return (
            <a href={each.path} key={index} style={{ textDecoration: "none" }}>
              <ButtonMenu
                active={clickedLink === index ? 1 : 0}
                onClick={() => {
                  setClickedLink(index);
                }}
              >
                {each.name}
              </ButtonMenu>
            </a>
          );
        })}
      </SectionLinks>
      <SectionSocial>
        <SocialIconGroup />
      </SectionSocial>
      <ButtonMobileMenu onClick={() => setIsMobile(!isMobile)}>
        <LineTop active={isMobile ? 1 : 0} />
        <LineMiddle active={isMobile ? 1 : 0} />
        <LineBogtom active={isMobile ? 1 : 0} />
      </ButtonMobileMenu>
      <Slide in={isMobile} direction={"right"}>
        <MobileMenu>
          <LogoIcon>
            <img
              src="/assets/images/icons/logo.png"
              width={"100%"}
              alt="logo"
            />
          </LogoIcon>
          <SectionMobileLinks>
            {dataMenuLink?.map((each: any, index: any) => {
              return (
                <a
                  href={each.path}
                  key={index}
                  style={{ textDecoration: "none" }}
                  onClick={() => {
                    setIsMobile(false);
                  }}
                >
                  <LinkMobile>{each.name}</LinkMobile>
                </a>
              );
            })}
          </SectionMobileLinks>
          <SectionMobileFooter>
            <SocialIconGroup />
            <TextReserved>© 2024 himitsu. All rights reserved.</TextReserved>
          </SectionMobileFooter>
        </MobileMenu>
      </Slide>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  padding: 30px 200px;

  @media (max-width: 1440px) {
    padding: 30px 100px;
  }
  @media (max-width: 1024px) {
    padding: 20px 50px;
  }
  @media (max-width: 700px) {
    padding: 20px 30px;
  }
  @media (max-width: 600px) {
    padding: 20px 20px;
  }
`;

const LogoIcon = styled(Box)`
  display: flex;
  width: 70px;
  aspect-ratio: 1;

  @media (max-width: 1024px) {
    width: 50px;
  }
`;

const SectionLinks = styled(Box)`
  display: flex;
  align-items: center;
  @media (max-width: 700px) {
    display: none;
  }
`;

const SectionSocial = styled(Box)`
  display: flex;
  @media (max-width: 700px) {
    display: none;
  }
`;
const ButtonMenu = styled(Box)`
  display: flex;
  width: fit-content;
  height: 30px;
  padding: 0px 15px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-family: Belleza;
  color: ${({ active }: any) => (active ? "black" : "white")};
  background-color: ${({ active }: any) => (active ? "white" : "black")};
  border-radius: 4px;
  margin: 0px 20px;

  cursor: pointer;
  user-select: none;

  transition: 0.3s;

  @media (max-width: 1440px) {
    margin: 0px 15px;
  }
  @media (max-width: 1024px) {
    margin: 0px 10px;
    font-size: 14px;
    padding: 0px 10px;
  }
  @media (max-width: 768px) {
    margin: 0px 5px;
    font-size: 12px;
    padding: 0px 8px;
  }
`;

const ButtonMobileMenu = styled(Box)`
  display: none;
  @media (max-width: 700px) {
    display: flex;
  }
  position: fixed;
  top: 30px;
  right: 20px;
  z-index: 10000;

  width: 36px;
  height: 26px;
  cursor: pointer;
  user-select: none;
  flex-direction: column;
  justify-content: space-between;
`;

const LineTop = styled(Box)`
  width: 100%;
  height: 3px;
  border-radius: 6px;
  background-color: white;
  transition: 0.3s;

  transform: ${({ active }: any) =>
    active ? "rotate(45deg)  translateY(16px)" : "none"};
`;

const LineMiddle = styled(Box)`
  width: 100%;
  height: 3px;
  border-radius: 6px;
  background-color: white;
  transition: 0.3s;
  opacity: ${({ active }: any) => (active ? "0" : "1")};
`;

const LineBogtom = styled(Box)`
  width: 100%;
  height: 3px;
  border-radius: 6px;
  background-color: white;
  transition: 0.3s;

  transform: ${({ active }: any) =>
    active ? "rotate(-45deg)  translateY(-16px)" : "none"};
`;

const MobileMenu = styled(Box)`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  background-color: black;

  padding: 20px 20px;
  z-index: 1000;
  box-sizing: border-box;
`;

const SectionMobileLinks = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 30px;
`;

const LinkMobile = styled(Box)`
  display: flex;
  margin-bottom: 20px;
  font-size: 24px;
  color: white;
  font-family: Belleza;
`;

const SectionMobileFooter = styled(Box)`
  display: flex;
  position: absolute;
  width: 100%;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
  flex-direction: column;
`;

const TextReserved = styled(Box)`
  display: flex;
  margin-top: 20px;
  color: #eeeeee70;
  font-size: 14px;
  font-family: Belleza;
`;

export default Header;
