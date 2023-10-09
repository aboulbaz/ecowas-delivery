import React from "react";
import { HorizontalOverviewChartWrapper } from "./BetaHorizontalOverviewChart.style";
import HorizontalOverviewChartBar from "./HorizontalOverviewChartBar";

type BetaHorizontalOverviewChartProps = {
  latestValue: number;
  targetValue: number;
};

const BetaHorizontalOverviewChart: React.FC<
  BetaHorizontalOverviewChartProps
> = ({ latestValue, targetValue }) => {
  return (
    <HorizontalOverviewChartWrapper>
      <HorizontalOverviewChartBar
        value={latestValue}
        targetValue={targetValue}
      />
    </HorizontalOverviewChartWrapper>
  );
};

export default BetaHorizontalOverviewChart;
