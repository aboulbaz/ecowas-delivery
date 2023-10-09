import React from "react";
import {
  ChartLabelTitle,
  ChartLabelWrapper,
  ChartLabelYear,
  ChartLabelsContainer,
} from "./OverviewChart.style";
import { FormattedMessage } from "react-intl";

type Props = {
  targetValue: number;
  baseLine: number;
  target2030: number;
};

const ChartLabels: React.FC<Props> = ({
  targetValue,
  baseLine,
  target2030,
}) => {
  return (
    <ChartLabelWrapper>
      <ChartLabelsContainer>
        <ChartLabelTitle isPrimary value={targetValue} maxValue={target2030}>
          <FormattedMessage id="overview.target-value" />
          <ChartLabelYear isPrimary>2019-20</ChartLabelYear>
        </ChartLabelTitle>
        <ChartLabelTitle value={baseLine} maxValue={target2030}>
          <FormattedMessage id="overview.baseline" />
          <ChartLabelYear>2019-20</ChartLabelYear>
        </ChartLabelTitle>
      </ChartLabelsContainer>
    </ChartLabelWrapper>
  );
};

export default ChartLabels;
