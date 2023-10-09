import React from "react";
import {
  ChartTargetValueWrapper,
  ChartTargetValueTitle,
  ChartTargetValue,
} from "./OverviewChart.style";
import { FormattedMessage } from "react-intl";

type Props = { target2030: number };

const TargetValue2030: React.FC<Props> = ({ target2030 }) => {
  return (
    <ChartTargetValueWrapper>
      <ChartTargetValueTitle>
        <FormattedMessage id="overview.target-2030" />
      </ChartTargetValueTitle>
      <ChartTargetValue>{target2030.toFixed(2)}</ChartTargetValue>
    </ChartTargetValueWrapper>
  );
};

export default TargetValue2030;
