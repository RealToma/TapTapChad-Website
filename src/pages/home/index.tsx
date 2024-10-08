import { Box } from "@mui/material";
import styled from "styled-components";
import BorderSection from "../../components/border/borderSection";
import Hero from "./01Hero";
import TapTapChad from "./04TapTapChad";
import Tokenomics from "./05Tokenomics";
import Contact from "./07Contact";
import MemeToken from "./02MemeToken";
import Booster from "./03Booster";
import Press from "./06Press";

const Home = () => {
  return (
    <StyledComponent>
      <Hero />
      <BorderSection />
      <MemeToken />
      <Booster />
      <TapTapChad />
      <Tokenomics />
      <Press />
      <BorderSection />
      <Contact />
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export default Home;
