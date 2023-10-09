import React from "react";
import {
  ChartValueTitle,
  ChartValueWrapper,
  ChartValuesContainer,
} from "./OverviewChart.style";

type Props = {
  targetValue: number;
  baseLine: number;
  target2030: number;
};

const ChartValues: React.FC<Props> = ({
  targetValue,
  baseLine,
  target2030,
}) => {
  return (
    <ChartValueWrapper>
      <ChartValuesContainer>
        <ChartValueTitle value={baseLine} maxValue={target2030}>
          {baseLine.toFixed(2)}
        </ChartValueTitle>
        <ChartValueTitle isPrimary value={targetValue} maxValue={target2030}>
          {targetValue.toFixed(2)}
        </ChartValueTitle>
      </ChartValuesContainer>
    </ChartValueWrapper>
  );
};

export default ChartValues;
