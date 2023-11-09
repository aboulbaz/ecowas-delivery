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
  ChartWrapper,
  DimensionResultsChartIndicator,
  DimensionResultsChartIndicatorWrapper,
  DimensionResultsChartTitle,
  DimensionResultsChartValueWrapper,
} from "./DimensionResultsChart.style";
import { themeColors } from "themes/emotionColors";
import "chartjs-plugin-datalabels";
import { FormattedMessage, useIntl } from "react-intl";
import { useLanguageContext } from "utils/context";
import { LANGUAGES } from "utils/constants";

ChartJS.register(CategoryScale, LinearScale, BarElement);

type DimensionResultsChartProps = {
  targetValue: number;
  baseLine: number;
  latestValue: number;
};

const DimensionResultsChart: React.FC<DimensionResultsChartProps> = ({
  targetValue,
  baseLine,
  latestValue,
}) => {
  const intl = useIntl();
  const { language } = useLanguageContext();
  const [currentLanguage, setCurrentLanguage] = useState<LANGUAGES>(language);

  const chartData = {
    labels: [""],
    datasets: [
      {
        label: "Latest Value",
        data: [latestValue],
        backgroundColor: themeColors.success,
        borderRadius: 10,
      },
      {
        label: "Max Value",
        data: [1],
        backgroundColor: themeColors.primary,
        borderRadius: 10,
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
        max: 1,
        display: false,
      },
      y: {
        grid: {
          display: false,
        },
        beginAtZero: true,
        stacked: true,
      },
    },
  };

  const afterDraw = (chart) => {
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
            const value = dataset.data?.[index] || 0;

            ctx.textAlign = "left";
            ctx.textBaseline = "middle";
            ctx.fillStyle = "white";
            ctx.font = "bold 10px Arial";
            ctx.lineWidth = 10;

            y = (y + base) / 2.5;

            if (Number(value) < 0.5) {
              ctx.fillText(
                intl.formatMessage({
                  id: "overview.hcd-gender-index.latest-value",
                }),
                x + 10,
                y + 18
              );
              ctx.fillText(`2018-20`, x + 10, y + 30);
              ctx.textAlign = "left";
              ctx.textBaseline = "middle";
              ctx.fillStyle = "white";
              ctx.font = "bold 20px Arial";
              ctx.lineWidth = 10;
              ctx.fillText(
                `${value ? Number(value)?.toFixed(2) : "0"}`,
                x + 10,
                y + 50
              );
            } else {
              ctx.fillText(`Latest Value`, x - 70, y + 18);
              ctx.fillText(`2018-20`, x - 70, y + 30);
              ctx.textAlign = "left";
              ctx.textBaseline = "middle";
              ctx.fillStyle = "white";
              ctx.font = "bold 20px Arial";
              ctx.lineWidth = 10;
              ctx.fillText(
                `${value ? Number(value)?.toFixed(2) : "0"}`,
                x - 70,
                y + 50
              );
            }
          }
          ctx.save();

          ctx.restore();
        });
      }
    });
  };

  const plugins: Plugin[] = [
    {
      id: "datalabels",
      afterDraw: afterDraw,
    },
  ];

  useEffect(() => {
    setCurrentLanguage(language);
  }, [language, setCurrentLanguage]);

  return (
    <ChartWrapper>
      <DimensionResultsChartIndicatorWrapper>
        <DimensionResultsChartValueWrapper
          value={baseLine * 100}
          color="#7F7F7F"
        >
          <DimensionResultsChartIndicator color="#7F7F7F">
            {baseLine ? baseLine.toFixed(2) : "0"}
          </DimensionResultsChartIndicator>
          <DimensionResultsChartTitle>
            <FormattedMessage id="overview.baseline" />
            <div>2016-18</div>
          </DimensionResultsChartTitle>
        </DimensionResultsChartValueWrapper>
      </DimensionResultsChartIndicatorWrapper>
      <Bar
        data={chartData}
        options={optionsBeta}
        plugins={plugins}
        redraw={currentLanguage !== language}
      />

      <DimensionResultsChartIndicatorWrapper>
        <DimensionResultsChartValueWrapper
          color="#00B069"
          value={targetValue * 100}
        >
          <DimensionResultsChartIndicator color="#00B069">
            {targetValue ? targetValue.toFixed(2) : "0"}
          </DimensionResultsChartIndicator>
          <DimensionResultsChartTitle>
            <FormattedMessage id="overview.target-value" />
            <div>2019-20</div>
          </DimensionResultsChartTitle>
        </DimensionResultsChartValueWrapper>{" "}
      </DimensionResultsChartIndicatorWrapper>
    </ChartWrapper>
  );
};

export default DimensionResultsChart;
