import { Box } from "@mui/material";
import styled from "styled-components";
import { useState } from "react";
import { dataMenuLink } from "../../data/links";
import { SocialIconGroup } from "../icons/socialIconGroup";
import Slide from "@mui/material/Slide";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

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
              <LinkEach
                active={clickedLink === index ? 1 : 0}
                onClick={() => {
                  setClickedLink(index);
                }}
              >
                {each.name}
              </LinkEach>
            </a>
          );
        })}
      </SectionLinks>
      <ButtonBuyChad>BUY $CHAD</ButtonBuyChad>
      <ButtonMobileMenu
        onClick={() => {
          setIsMobile(!isMobile);
          if (isMobile) {
            enablePageScroll();
          } else {
            disablePageScroll();
          }
        }}
      >
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
                    enablePageScroll();
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
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  /* position: fixed; */
  background-color: white;
  /* z-index: 1000; */

  padding: 30px 200px;
  box-sizing: border-box;
  @media (max-width: 1440px) {
    padding: 30px 150px;
  }
  @media (max-width: 1280px) {
    padding: 25px 50px;
  }
  @media (max-width: 768px) {
    padding: 20px 30px;
  }
  @media (max-width: 600px) {
    padding: 10px 20px;
  }
`;

const LogoIcon = styled(Box)`
  display: flex;
  width: 70px;
  aspect-ratio: 1;
  cursor: pointer;
  user-select: none;
  @media (max-width: 1024px) {
    width: 50px;
  }
`;

const SectionLinks = styled(Box)`
  display: flex;
  align-items: center;
  @media (max-width: 900px) {
    display: none;
  }
`;

const ButtonBuyChad = styled(Box)`
  display: flex;
  width: 200px;
  height: 55px;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  font-family: "Paytone One";
  font-size: 24px;
  font-weight: bold;
  border-radius: 12px;
  border: 2px solid black;

  cursor: pointer;
  user-select: none;
  transition: 0.3s;
  &:hover {
    background-color: white;
    color: black;
  }

  @media (max-width: 1440px) {
    width: 180px;
    height: 55px;
    font-size: 22px;
  }
  @media (max-width: 1024px) {
    width: 130px;
    height: 45px;
    font-size: 18px;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;
const LinkEach = styled(Box)`
  display: flex;
  color: black;
  font-size: 20px;
  font-weight: bold;
  font-family: Karma;
  margin: 0px 25px;
  cursor: pointer;
  user-select: none;
  transition: 0.3s;
  position: relative;

  &::before {
    content: "";
    width: 0%;
    height: 1px;
    background: black;
    bottom: 0px;
    position: absolute;
    transition: all 0.3s linear;
  }
  &:hover {
    color: black;
  }
  &:hover::before {
    width: 100%;
  }

  @media (max-width: 1600px) {
    font-size: 18px;
    margin: 0px 20px;
  }
  @media (max-width: 1440px) {
    margin: 0px 15px;
    font-size: 17px;
  }

  @media (max-width: 1280px) {
    margin: 0px 12px;
    font-size: 16px;
  }
`;

const ButtonMobileMenu = styled(Box)`
  display: none;
  @media (max-width: 900px) {
    display: flex;
  }
  /* position: fixed; */
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
  background-color: black;
  transition: 0.3s;

  transform: ${({ active }: any) =>
    active ? "rotate(45deg)  translateY(16px)" : "none"};
`;

const LineMiddle = styled(Box)`
  width: 100%;
  height: 3px;
  border-radius: 6px;
  background-color: black;
  transition: 0.3s;
  opacity: ${({ active }: any) => (active ? "0" : "1")};
`;

const LineBogtom = styled(Box)`
  width: 100%;
  height: 3px;
  border-radius: 6px;
  background-color: black;
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
  background-color: white;

  padding: 20px 50px;
  z-index: 1000;
  box-sizing: border-box;
  @media (max-width: 600px) {
    padding: 20px 30px;
  }
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
  font-weight: bold;
  color: black;
  font-family: Karma;
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
  color: black;
  font-size: 14px;
  font-weight: bold;
  font-family: Karma;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export default Header;
