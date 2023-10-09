import React from "react";
import { HorizontalOverviewChartWrapper } from "./HorizontalDimensionResultsChart.style";
import HorizontalOverviewChartBar from "./HorizontalDimensionResultsChart";

type HorizontalDimensionResultsChartProps = {
  value: number;
  targetValue: number;
};

const HorizontalDimensionResultsChart: React.FC<
  HorizontalDimensionResultsChartProps
> = ({ targetValue, value }) => {
  return (
    <HorizontalOverviewChartWrapper>
      <HorizontalOverviewChartBar value={value} targetValue={targetValue} />
    </HorizontalOverviewChartWrapper>
  );
};

export default HorizontalDimensionResultsChart;
