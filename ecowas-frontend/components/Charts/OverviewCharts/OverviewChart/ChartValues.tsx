import React from "react";
import {
  ChartValueTitle,
  ChartValueWrapper,
  ChartValuesContainer,
} from "./OverviewChart.style";

type Props = {
  targetValue: number;
  baseLine: number;
};

const ChartValues: React.FC<Props> = ({ targetValue, baseLine }) => {
  return (
    <ChartValueWrapper>
      <ChartValuesContainer>
        <ChartValueTitle value={baseLine}>
          {baseLine.toFixed(2)}
        </ChartValueTitle>
        <ChartValueTitle isPrimary value={targetValue}>
          {targetValue.toFixed(2)}
        </ChartValueTitle>
      </ChartValuesContainer>
    </ChartValueWrapper>
  );
};

export default ChartValues;
