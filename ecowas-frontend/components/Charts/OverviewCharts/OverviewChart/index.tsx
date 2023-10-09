import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  Plugin,
} from "chart.js";
import {
  BarWrapper,
  ChartBarWrapper,
  ChartWrapper,
} from "./OverviewChart.style";
import { themeColors } from "themes/emotionColors";
import ChartLabels from "./ChartLabels";
import ChartValues from "./ChartValues";
import TargetValue2030 from "./TargetValue2030";
import "chartjs-plugin-datalabels";

ChartJS.register(CategoryScale, LinearScale, BarElement);

type OverviewChartProps = {
  targetValue: number;
  baseLine: number;
  target2030: number;
  latestValue: number;
};

const OverviewChart: React.FC<OverviewChartProps> = ({
  targetValue,
  baseLine,
  target2030,
  latestValue,
}) => {
  const data = {
    labels: [""],
    datasets: [
      {
        label: "Latest Value",
        data: [+latestValue.toFixed(2)],
        backgroundColor: themeColors.success,
        borderRadius: 10,
      },
      {
        label: "Max value",
        data: [1],
        backgroundColor: themeColors.primary,
        borderRadius: 10,
      },
    ],
  };

  const chosenAxis: "x" | "y" | undefined = "x";
  const optionsBeta = {
    indexAxis: chosenAxis,
    responsive: true,
    maintainAspectRatio: false,
    borderWidth: 0,
    scales: {
      x: {
        grid: {
          display: false,
        },
        beginAtZero: true,
        stacked: true,
        barPercentage: 0.9,
        categoryPercentage: 0.8,
      },
      y: {
        max: 1.5,
        display: false,
      },
    },
  };

  const plugins: Plugin[] = [
    {
      id: "datalabels",
      afterDraw: (chart) => {
        const ctx = chart.ctx as CanvasRenderingContext2D;

        chart.data.datasets.forEach((dataset, datasetIndex) => {
          const meta = chart.getDatasetMeta(datasetIndex);
          if (!meta.hidden) {
            meta.data.forEach((element, index) => {
              if (meta?.label === "Latest Value") {
                let { x, y, base, width } = element.getProps([
                  "x",
                  "y",
                  "base",
                  "width",
                ]);
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillStyle = "white";
                ctx.font = "bold 10px Arial";
                ctx.lineWidth = 10;

                y = (y + base) / 2.5;

                ctx.fillText(`Latest Value`, x, y);
                ctx.fillText(`2018-20`, x, y + 15);
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillStyle = "white";
                ctx.font = "bold 20px Arial";
                ctx.lineWidth = 10;

                ctx.fillText(`${latestValue.toFixed(2)}`, x, y + 33);
              }
              ctx.save();

              ctx.restore();
            });
          }
        });
      },
    },
  ];

  return (
    <ChartWrapper>
      <TargetValue2030 target2030={target2030} />
      <ChartBarWrapper>
        <ChartValues
          targetValue={targetValue}
          baseLine={baseLine + 0.20}
          target2030={target2030}
        />
        <BarWrapper>
          <Bar data={data} options={optionsBeta} plugins={plugins} />
        </BarWrapper>
        <ChartLabels
          targetValue={targetValue}
          baseLine={baseLine + 0.20}
          target2030={target2030}
        />
      </ChartBarWrapper>
    </ChartWrapper>
  );
};

export default OverviewChart;
