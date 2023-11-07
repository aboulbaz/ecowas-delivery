import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  Plugin,
  ChartData,
} from "chart.js";
import { themeColors } from "themes/emotionColors";
import "chartjs-plugin-datalabels";
import {
  HorizontalOverviewChartText,
  HorizontalOverviewChartWrapper,
} from "./HorizontalOverviewChart.style";
import { FormattedMessage } from "react-intl";

ChartJS.register(CategoryScale, LinearScale, BarElement);

type HorizontalOverviewChartProps = {
  data1?: number;
  data2?: number;
};

const HorizontalOverviewChart: React.FC<
  HorizontalOverviewChartProps
> = ({}) => {
  const data: ChartData<"bar", number[], string> = {
    labels: [""],
    datasets: [
      {
        label: "Dataset 1",
        data: [3],
        backgroundColor: themeColors.success,
        borderRadius: 10,
        barThickness: 20,
        maxBarThickness: 20,
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
        grid: {
          display: false,
        },
        beginAtZero: true,
        display: false,
        max: 7,
      },
      y: {
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
              if (meta?.label === "Dataset 2") {
                let { x, y, base, width } = element.getProps([
                  "x",
                  "y",
                  "base",
                  "width",
                ]);
                const value = dataset.data?.[index];

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
                ctx;

                ctx.fillText(`${value}`, x, y + 33);
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
    <HorizontalOverviewChartWrapper>
      <Bar data={data} options={optionsBeta} />
      <HorizontalOverviewChartText>
        <FormattedMessage id="overview.target-value" />
      </HorizontalOverviewChartText>
    </HorizontalOverviewChartWrapper>
  );
};

export default HorizontalOverviewChart;
