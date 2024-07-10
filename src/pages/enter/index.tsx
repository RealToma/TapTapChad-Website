import { Box } from "@mui/material";
import styled from "styled-components";
import { useState } from "react";

const Enter = ({ setIsEntered }: any) => {
  const [clickedEnter, setClickedEnter] = useState(false);
  const handleEnterPage = () => {
    setClickedEnter(true);
    setTimeout(() => {
      setIsEntered(true);
    }, 2000);
  };

  return (
    <StyledComponent isactive={clickedEnter ? 1 : 0}>
      <SectionLogo isactive={clickedEnter ? 1 : 0}>
        <img src={"/assets/images/icons/logo.png"} width={"100%"} alt="logo" />
      </SectionLogo>
      <SectionButton>
        <button
          className="glowing-btn"
          onClick={() => {
            handleEnterPage();
          }}
        >
          <span className="glowing-txt">
            E<span className="faulty-letter">N</span>TER
          </span>
        </button>
      </SectionButton>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: white;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: 2s;
  opacity: ${({ isactive }: any) => (isactive ? "0" : "1")};

  animation: aniEnterPage 500ms ease;
  @keyframes aniEnterPage {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const SectionLogo = styled(Box)`
  display: flex;
  width: 500px;

  transition: 2s;
  /* transform: ${({ isactive }: any) =>
    isactive ? "rotate(360deg)" : "rotate(0deg)"}; */
  width: ${({ isactive }: any) => (isactive ? "900px" : "500px")};

  @media (max-width: 768px) {
    width: 400px;
  }
  @media (max-width: 600px) {
    width: 300px;
  }
`;

const SectionButton = styled(Box)`
  display: flex;
  margin-top: 50px;
  --glow-color: black;

  .glowing-btn {
    position: relative;
    color: var(--glow-color);
    cursor: pointer;
    padding: 0.35em 1em;
    border: 0.15em solid var(--glow-color);
    border-radius: 0.45em;
    background: none;
    perspective: 2em;
    font-family: "Paytone One";
    font-size: 30px;
    font-weight: 900;
    letter-spacing: 1em;

    @media (max-width: 768px) {
      font-size: 25px;
    }
    @media (max-width: 600px) {
      font-size: 20px;
    }

    -webkit-box-shadow: inset 0px 0px 10px 0px var(--glow-color),
      0px 0px 0.5em 0px var(--glow-color);
    -moz-box-shadow: inset 0px 0px 10px 0px var(--glow-color),
      0px 0px 0.5em 0px var(--glow-color);
    box-shadow: inset 0px 0px 10px 0px var(--glow-color),
      0px 0px 0.5em 0px var(--glow-color);
    animation: border-flicker 3s linear infinite;
  }

  .glowing-txt {
    float: left;
    margin-right: -0.8em;
    -webkit-text-shadow: 0 0 10px hsl(0 0% 100% / 0.3),
      0 0 0.45em var(--glow-color);
    -moz-text-shadow: 0 0 10px hsl(0 0% 100% / 0.3),
      0 0 0.45em var(--glow-color);
    text-shadow: 0 0 10px hsl(0 0% 100% / 0.3), 0 0 0.45em var(--glow-color);
    animation: text-flicker 3s linear infinite;
  }

  .faulty-letter {
    opacity: 0.5;
    animation: faulty-flicker 2s linear infinite;
  }

  .glowing-btn::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.7;
    filter: blur(1em);
    transform: translateY(120%) rotateX(95deg) scale(1, 0.35);
    background: var(--glow-color);
    pointer-events: none;
  }

  .glowing-btn::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    z-index: -1;
    background-color: var(--glow-color);
    box-shadow: 0 0 2em 0.2em var(--glow-color);
    transition: opacity 100ms linear;
  }

  .glowing-btn:hover {
    color: white;
    text-shadow: none;
    animation: none;
  }

  .glowing-btn:hover .glowing-txt {
    animation: none;
  }

  .glowing-btn:hover .faulty-letter {
    animation: none;
    text-shadow: none;
    opacity: 1;
  }

  .glowing-btn:hover:before {
    filter: blur(1.5em);
    opacity: 1;
  }

  .glowing-btn:hover:after {
    opacity: 1;
  }

  @keyframes faulty-flicker {
    0% {
      opacity: 0.1;
    }
    2% {
      opacity: 0.1;
    }
    4% {
      opacity: 0.5;
    }
    19% {
      opacity: 0.5;
    }
    21% {
      opacity: 0.1;
    }
    23% {
      opacity: 1;
    }
    80% {
      opacity: 0.5;
    }
    83% {
      opacity: 0.4;
    }

    87% {
      opacity: 1;
    }
  }

  @keyframes text-flicker {
    0% {
      opacity: 0.1;
    }

    2% {
      opacity: 1;
    }

    8% {
      opacity: 0.1;
    }

    9% {
      opacity: 1;
    }

    12% {
      opacity: 0.1;
    }
    20% {
      opacity: 1;
    }
    25% {
      opacity: 0.3;
    }
    30% {
      opacity: 1;
    }

    70% {
      opacity: 0.7;
    }
    72% {
      opacity: 0.2;
    }

    77% {
      opacity: 0.9;
    }
    100% {
      opacity: 0.9;
    }
  }

  @keyframes border-flicker {
    0% {
      opacity: 0.1;
    }
    2% {
      opacity: 1;
    }
    4% {
      opacity: 0.1;
    }

    8% {
      opacity: 1;
    }
    70% {
      opacity: 0.7;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default Enter;
