import { Box } from "@mui/material";
import styled from "styled-components";
import Chart from "react-apexcharts";
import { CustomTextHead01 } from "../../components/text/textHead";
import { CustomTextBody01 } from "../../components/text/textBody";
import { HiClipboard, HiClipboardCheck } from "react-icons/hi";
import { useState } from "react";
import copy from "copy-to-clipboard";
import { addressChadToken } from "../../data/config";
import { dataTokenomics } from "../../data/token";
import { shortAddress } from "../../libs/functions";

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
      <SectionTokenDetails>
        <CustomTextHead01 text="CHADS tokens" color={"black"} />
        <SectionContractAddress>
          <CustomTextBody01 text="CONTACT ADDRESS" color={"black"} />
          <SectionCopyAddress>
            <TextAddress>{shortAddress(addressChadToken)}</TextAddress>
            <ButtonCopy
              onClick={() => {
                handleCopyAddress();
              }}
            >
              {!flagCopiedAddress ? <HiClipboard /> : <HiClipboardCheck />}
            </ButtonCopy>
          </SectionCopyAddress>
          <SectionTokenomics>
            <TableHead>
              <RowNo>No</RowNo>
              <RowTopic>Topic</RowTopic>
              <RowPercentage justifyContent="center">Percentage</RowPercentage>
              <RowTokens justifyContent="flex-end">Tokens</RowTokens>
            </TableHead>
            <TableBody>
              {dataTokenomics?.map((each: any, index: any) => {
                return (
                  <TableHead key={index}>
                    <RowNo>{index + 1}</RowNo>
                    <RowTopic>{each.name}</RowTopic>
                    <RowPercentage justifyContent="center">
                      {each.percentage}%
                    </RowPercentage>
                    <RowTokens justifyContent="flex-end">
                      {each.amount}
                    </RowTokens>
                  </TableHead>
                );
              })}
            </TableBody>
          </SectionTokenomics>
        </SectionContractAddress>
      </SectionTokenDetails>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  background-color: #f3f3f3;
  align-items: center;

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
  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
  @media (max-width: 768px) {
    padding: 30px 30px;
  }
  @media (max-width: 600px) {
    padding: 20px 20px;
  }
`;
const SectionChart = styled(Box)`
  display: flex;
  width: 600px;
  justify-content: center;
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
  @media (max-width: 900px) {
    margin-top: 30px;
    width: 100%;
    margin-right: 0px;
  }
`;

const SectionTokenDetails = styled(Box)`
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

  @media (max-width: 1440px) {
    margin-top: 15px;
  }
`;

const SectionCopyAddress = styled(Box)`
  display: flex;
  width: 100%;
  height: 55px;
  border-radius: 5px;
  background: #000;
  margin-top: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  box-sizing: border-box;
  @media (max-width: 1440px) {
    padding: 0px 15px;
    height: 50px;
  }
  @media (max-width: 768px) {
    padding: 0px 10px;
    height: 40px;
  }
`;

const TextAddress = styled(Box)`
  display: flex;
  color: #fff;

  font-family: Karma;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  text-transform: capitalize;

  margin-right: 20px;
  @media (max-width: 1440px) {
    font-size: 16px;
  }
  @media (max-width: 1024px) {
    font-size: 14px;
  }
  @media (max-width: 350px) {
    font-size: 12px;
  }
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
  @media (max-width: 1440px) {
    font-size: 22px;
  }
  @media (max-width: 1024px) {
    font-size: 20px;
  }
`;

const SectionTokenomics = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 30px;
  @media (max-width: 1024px) {
    margin-top: 20px;
  }
`;

const TableHead = styled(Box)`
  display: flex;
  align-items: center;
  color: #000;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.2);
  font-family: Karma;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  padding: 10px 20px;
  box-sizing: border-box;

  margin-bottom: 12px;

  @media (max-width: 1650px) {
    font-size: 18px;
  }

  @media (max-width: 1440px) {
    font-size: 16px;
    padding: 10px 10px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 10px;
    margin-bottom: 8px;
  }
  @media (max-width: 600px) {
    font-size: 12px;
    padding: 10px 10px;
  }
  @media (max-width: 350px) {
    font-size: 10px;
    padding: 10px 5px;
  }
`;

const RowNo = styled(Box)`
  display: flex;
  flex: 1;
`;

const RowTopic = styled(Box)`
  display: flex;
  flex: 6;
`;

const RowPercentage = styled(Box)`
  display: flex;
  flex: 3;
`;

const RowTokens = styled(Box)`
  display: flex;
  flex: 3;
`;

const TableBody = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export default Tokenomics;
