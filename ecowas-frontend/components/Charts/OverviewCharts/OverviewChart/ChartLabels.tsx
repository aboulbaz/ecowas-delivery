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
};

const ChartLabels: React.FC<Props> = ({
  targetValue,
  baseLine,
}) => {
  return (
    <ChartLabelWrapper>
      <ChartLabelsContainer>
        <ChartLabelTitle isPrimary value={targetValue}>
          <FormattedMessage id="overview.target-value" />
          <ChartLabelYear isPrimary>2019-20</ChartLabelYear>
        </ChartLabelTitle>
        <ChartLabelTitle value={baseLine}>
          <FormattedMessage id="overview.baseline" />
          <ChartLabelYear>2019-20</ChartLabelYear>
        </ChartLabelTitle>
      </ChartLabelsContainer>
    </ChartLabelWrapper>
  );
};

export default ChartLabels;
