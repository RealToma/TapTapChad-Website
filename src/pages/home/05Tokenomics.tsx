import { Box } from "@mui/material";
import styled from "styled-components";
import Chart from "react-apexcharts";
import { CustomTextHead01 } from "../../components/text/textHead";
import { CustomTextBody01 } from "../../components/text/textBody";
import { HiClipboard, HiClipboardCheck } from "react-icons/hi";
import { useState } from "react";
import copy from "copy-to-clipboard";
import { addressChadToken } from "../../data/config";

const dataChartTokenomics = {
  series: [35, 25, 15, 25],
  options: {
    legend: {
      show: false,
    },
    labels: ["Presale", "Liquidity", "Marketing", "Development and Staking"],
    dataLabels: {
      enabled: true,
      dropShadow: {
        enabled: window.innerWidth < 600 ? false : true,
        // left: 2,
        top: 2,
        opacity: 0.5,
      },
      style: {
        fontSize: window.innerWidth < 600 ? "12px" : "16px",
        fontStyle: "Karma",
      },
      formatter: function (val: any, opt: any) {
        return [val + "%"];
      },
    },
    stroke: {
      show: false,
      width: 3,
      curve: "smooth",
      colors: ["#ffffff"],
    },
    tooltip: {
      style: {
        fontSize: "14px",
        fontStyle: "Karma",
      },
      y: {
        formatter: function (val: any) {
          return val + "%";
        },
      },
    },
    plotOptions: {
      // treemap: {
      //   enableShades: true,
      //   shadeIntensity: 0.5,
      //   reverseNegativeShade: true,
      //   colorScale: {
      //     ranges: [
      //       {
      //         from: 0,
      //         to: 100,
      //         color: "#000000",
      //       },
      //     ],
      //   },
      // },
      treemap: {
        distributed: true,
        enableShades: true,
        shadeIntensity: 0,
        reverseNegativeShade: true,
      },
    },
  },
};

const Tokenomics = () => {
  const [flagCopiedAddress, setFlagCopiedAddress] = useState(false);

  const handleCopyAddress = () => {
    setFlagCopiedAddress(true);
    copy(addressChadToken);
    setTimeout(() => {
      setFlagCopiedAddress(false);
    }, 1500);
  };

  return (
    <StyledComponent id="tokenomics">
      <SectionChart>
        <Chart
          options={dataChartTokenomics.options}
          series={dataChartTokenomics?.series}
          // height={300}
          type="pie"
        />
      </SectionChart>
      <SectionTokenomics>
        <CustomTextHead01 text="CHADS tokens" color={"black"} />
        <SectionContractAddress>
          <CustomTextBody01 text="CONTACT ADDRESS" color={"black"} />
          <SectionCopyAddress>
            <TextAddress>{addressChadToken}</TextAddress>
            <ButtonCopy
              onClick={() => {
                handleCopyAddress();
              }}
            >
              {!flagCopiedAddress ? <HiClipboard /> : <HiClipboardCheck />}
            </ButtonCopy>
          </SectionCopyAddress>
        </SectionContractAddress>
      </SectionTokenomics>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  background-color: #f3f3f3;

  padding: 80px 200px;
  box-sizing: border-box;
  @media (max-width: 1440px) {
    padding: 60px 150px;
  }
  @media (max-width: 1280px) {
    padding: 50px 50px;
  }
  @media (max-width: 1024px) {
    padding: 40px 50px;
  }
  @media (max-width: 768px) {
    padding: 30px 30px;
    flex-direction: column;
  }
  @media (max-width: 600px) {
    padding: 20px 20px;
  }
`;
const SectionChart = styled(Box)`
  display: flex;
  width: 600px;
  justify-content: center;
  margin-right: 50px;
  > div {
    width: 100%;
  }
  @media (max-width: 1440px) {
    margin-right: 40px;
    width: 500px;
  }
  @media (max-width: 1280px) {
    width: 400px;
    margin-right: 30px;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0px;
    margin-top: 30px;
  }
`;

const SectionTokenomics = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
`;

const SectionContractAddress = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 100%;
`;

const SectionCopyAddress = styled(Box)`
  display: flex;
  width: 70%;
  height: 55px;
  border-radius: 5px;
  background: #000;
  margin-top: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  box-sizing: border-box;
`;

const TextAddress = styled(Box)`
  display: flex;
  color: #fff;

  font-family: Karma;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  text-transform: capitalize;
`;

const ButtonCopy = styled(Box)`
  display: flex;
  color: white;
  font-size: 25px;
  cursor: pointer;
  user-select: none;

  transition: 300ms;
  &:hover {
    color: #838383;
  }
`;

export default Tokenomics;
