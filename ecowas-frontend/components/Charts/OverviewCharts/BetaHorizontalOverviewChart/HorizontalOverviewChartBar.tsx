import React from "react";
import {
  HorizontalOverviewChartBarContainer,
  HorizontalOverviewChartBarTargetValue,
  HorizontalOverviewChartBarTargetValueWrapper,
  HorizontalOverviewChartBarWrapper,
  HorizontalOverviewChartText,
} from "./BetaHorizontalOverviewChart.style";
import { FormattedMessage } from "react-intl";

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
      <HorizontalOverviewChartBarTargetValueWrapper
        value={value}
        targetValue={targetValue}
      >
        <HorizontalOverviewChartBarTargetValue />
      <HorizontalOverviewChartText>
        <FormattedMessage id={"overview.latest-vs-target"} />
      </HorizontalOverviewChartText>
      </HorizontalOverviewChartBarTargetValueWrapper>
    </HorizontalOverviewChartBarContainer>
  );
};

export default HorizontalOverviewChartBar;
