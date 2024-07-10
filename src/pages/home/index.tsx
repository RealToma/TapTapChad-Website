import { Box } from "@mui/material";
import styled from "styled-components";
import BorderSection from "../../components/border/borderSection";
import Hero from "./01Hero";
import TapTapChad from "./02TapTapChad";
import Gallery from "./04Press";
import Tokenomics from "./03Tokenomics";
import Contact from "./05Contact";

const Home = () => {
  return (
    <StyledComponent>
      <Hero />
      <BorderSection />
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
