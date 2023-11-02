import React from "react";
import { FormattedMessage } from "react-intl";
import {
  HorizontalOverviewChartBarContainer,
  HorizontalOverviewChartBarTargetValue,
  HorizontalOverviewChartBarTargetValueWrapper,
  HorizontalOverviewChartBarWrapper,
  HorizontalOverviewChartText,
} from "./HorizontalDimensionResultsChart.style";

type Props = {
  value: number;
  targetValue: number;
};

const HorizontalOverviewChartBar: React.FC<Props> = ({
  value,
  targetValue,
}) => {
  return (
    <HorizontalOverviewChartBarContainer>
      <HorizontalOverviewChartBarWrapper percentage={value} />
      <HorizontalOverviewChartBarTargetValueWrapper>
        <HorizontalOverviewChartBarTargetValue percentage={targetValue} />
        <HorizontalOverviewChartText percentage={targetValue}>
          <FormattedMessage id={"overview.target-value"} />
        </HorizontalOverviewChartText>
      </HorizontalOverviewChartBarTargetValueWrapper>
    </HorizontalOverviewChartBarContainer>
  );
};

export default HorizontalOverviewChartBar;
