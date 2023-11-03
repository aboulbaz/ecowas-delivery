import React from "react";
import { FormattedMessage } from "react-intl";
import {
  DimensionResultsCardProgressCardWrapper,
  DimensionResultsCardProgressTitle,
  DimensionResultsCardProgressValue,
  DimensionResultsCardProgressWrapper,
  DimensionResultsProgressIcon,
} from "./DimensionResultsCard.style";
import { HorizontalDimensionResultsChart } from "components/Charts/DimensionResultsCharts";

type Props = {
  progress: number;
  progressIcon: any;
  color: string;
  latestValueNormalized: number;
  targetValue: number;
};

const DimensionResultsCardProgressCard: React.FC<Props> = ({
  progress,
  progressIcon,
  color,
  latestValueNormalized,
  targetValue,
}) => {
  return (
    <DimensionResultsCardProgressCardWrapper>
      <DimensionResultsCardProgressWrapper>
        <DimensionResultsCardProgressTitle>
          <FormattedMessage id={"overview.progress"} />
        </DimensionResultsCardProgressTitle>
        <DimensionResultsCardProgressValue color={color}>
          <DimensionResultsProgressIcon src={progressIcon} alt={""} />
          {progress?.toFixed(2)}
        </DimensionResultsCardProgressValue>
      </DimensionResultsCardProgressWrapper>
      <HorizontalDimensionResultsChart
        value={latestValueNormalized}
        targetValue={targetValue}
      />
    </DimensionResultsCardProgressCardWrapper>
  );
};

export default DimensionResultsCardProgressCard;
