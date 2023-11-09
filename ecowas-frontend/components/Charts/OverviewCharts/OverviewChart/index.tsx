import React, { useEffect, useState } from "react";
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
import TargetValue2030 from "./TargetValue2030";
import "chartjs-plugin-datalabels";
import ChartValue from "./ChartValue";
import { useIntl } from "react-intl";
import { useLanguageContext } from "utils/context";
import { LANGUAGES } from "utils/constants";

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
  const intl = useIntl();
  const { language } = useLanguageContext();
  const [currentLanguage, setCurrentLanguage] = useState<LANGUAGES>(language)
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

                ctx.fillText(
                  intl.formatMessage({
                    id: "overview.hcd-gender-index.latest-value",
                  }),
                  x,
                  y
                );
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

  useEffect(() => {
    setCurrentLanguage(language)
  }, [language])

  return (
    <ChartWrapper>
      <TargetValue2030 target2030={target2030} />
      <ChartBarWrapper>
        <ChartValue title={"overview.baseline"} value={baseLine} />
        <BarWrapper>
          <Bar data={data} options={optionsBeta} plugins={plugins} redraw={language !== currentLanguage} />
        </BarWrapper>
        <ChartValue
          title={"overview.target-value"}
          value={targetValue}
          isPrimary
        />
      </ChartBarWrapper>
    </ChartWrapper>
  );
};

export default OverviewChart;
