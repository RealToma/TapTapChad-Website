import { Box } from "@mui/material";
import styled from "styled-components";
import BorderSection from "../../components/border/borderSection";
import Hero from "./01Hero";
import TapTapChad from "./03TapTapChad";
import Gallery from "./05Press";
import Tokenomics from "./04Tokenomics";
import Contact from "./06Contact";
import MemeToken from "./02MemeToken";

const Home = () => {
  return (
    <StyledComponent>
      <Hero />
      <BorderSection />
      <MemeToken />
      {/* <TapTapChad />
      <BorderSection />
      <Gallery />
      <BorderSection />
      <Tokenomics /> */}
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
