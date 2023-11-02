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
  ChartValue,
  ChartWrapper,
} from "./HorizontalCountryResultsChart.style";
import { themeColors } from "themes/emotionColors";
import "chartjs-plugin-datalabels";

ChartJS.register(CategoryScale, LinearScale, BarElement);

type DimensionResultsChartProps = {
  value: number;
  isLong: boolean;
  hasParent: boolean;
};

const HorizontalCountryResultsChart: React.FC<DimensionResultsChartProps> = ({
  value,
  isLong,
  hasParent,
}) => {
  const data = {
    labels: [""],
    datasets: [
      {
        label: "Value",
        data: [value * 2],
        backgroundColor: hasParent ? themeColors.success : themeColors.primary,
        borderRadius: 5,
      },
    ],
  };

  const chosenAxis: "x" | "y" | undefined = "y";
  const optionsBeta = {
    indexAxis: chosenAxis,
    responsive: true,
    maintainAspectRatio: false,
    borderWidth: 0,
    scales: {
      x: {
        max: 2,
        display: false,
      },
      y: {
        grid: {
          display: false,
        },
        beginAtZero: true,
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
          if (!meta.hidden && value >= 0.5 && !isLong) {
            meta.data.forEach((element, index) => {
              if (meta?.label === "Value") {
                let { x, y, base, width } = element.getProps([
                  "x",
                  "y",
                  "base",
                  "width",
                ]);
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillStyle = "white";
                ctx.font = "bold 12px Arial";
                ctx.lineWidth = 10;
                y = (y + base) / 2;
                ctx.fillText(`${value.toFixed(2)}`, x - 20, y + 8);
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
    <ChartWrapper isLong={isLong}>
      <Bar data={data} options={optionsBeta} plugins={plugins} />
      {(value < 0.5 || isLong) && (
        <ChartValue hasParent={!!hasParent}>{value}</ChartValue>
      )}
    </ChartWrapper>
  );
};

export default HorizontalCountryResultsChart;
