import { Box } from "@mui/material";
import styled from "styled-components";
import Chart from "react-apexcharts";

const dataChartTokenomics = {
  series: [
    {
      data: [
        {
          x: "Community and Airdrops",
          y: 40,
        },
        {
          x: "Social Media Airdrops",
          y: 15,
        },
        {
          x: "Team",
          y: 5,
        },
        {
          x: "Marketing",
          y: 5,
        },
        {
          x: "Reserve",
          y: 10,
        },
        {
          x: "Liquidity Pool",
          y: 25,
        },
      ],
    },
  ],
  options: {
    legend: {
      show: false,
    },
    chart: {
      height: 350,
      type: "treemap",
      toolbar: {
        show: false,
      },
    },

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
        fontStyle: "Belleza",
      },
      formatter: function (val: any, opt: any) {
        return [val, opt.value + "%"];
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
        fontStyle: "Belleza",
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
  return (
    <StyledComponent id="tokenomics">
      <TextHead>Tokenomics</TextHead>
      <SectionChart>
        <Chart
          options={dataChartTokenomics.options}
          series={dataChartTokenomics?.series}
          // height={300}
          type="treemap"
        />
      </SectionChart>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const TextHead = styled(Box)`
  font-family: Belleza;
  color: white;
  font-size: 60px;
  @media (max-width: 1024px) {
    font-size: 50px;
  }
  @media (max-width: 768px) {
    font-size: 40px;
  }
  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

const SectionChart = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 50px;
  > div {
    width: 60%;
  }
  @media (max-width: 1024px) {
    margin-top: 30px;
    > div {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export default Tokenomics;
