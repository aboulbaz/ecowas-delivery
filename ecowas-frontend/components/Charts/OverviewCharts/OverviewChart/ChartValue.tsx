import React from "react";
import {
  ChartLabelTitle,
  ChartLabelTitleText,
  ChartLabelValue,
  ChartLabelWrapper,
  ChartLabelYear,
  ChartLabelsContainer,
} from "./OverviewChart.style";
import { FormattedMessage } from "react-intl";

type Props = {
  title: string;
  value: number;
  isPrimary?: boolean;
};

const ChartValue: React.FC<Props> = ({ title, value, isPrimary }) => {
  return (
    <ChartLabelWrapper>
      <ChartLabelsContainer>
        <ChartLabelTitle isPrimary={isPrimary} value={value}>
          <ChartLabelTitleText isPrimary={isPrimary}>
            <FormattedMessage id={title} />
            <ChartLabelYear isPrimary={isPrimary}>2019-20</ChartLabelYear>
          </ChartLabelTitleText>
          <ChartLabelValue isPrimary={isPrimary}>
            {value.toFixed(2)}
          </ChartLabelValue>
        </ChartLabelTitle>
      </ChartLabelsContainer>
    </ChartLabelWrapper>
  );
};

export default ChartValue;
