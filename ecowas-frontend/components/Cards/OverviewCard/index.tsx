import { OverviewChart } from "components/Charts";
import React from "react";
import {
  OverviewCardIcon,
  OverviewCardIconWrapper,
  OverviewCardTitleWrapper,
  OverviewCardWrapper,
  OvervireCardProgressIcon,
  OvervireCardProgressValue,
  OvervireCardProgressWrapper,
} from "./OverviewCard.style";
import { FormattedMessage } from "react-intl";
import HCDGenderIndexCard from "./HCDGenderIndexCard";
import BetaHorizontalOverviewChart from "components/Charts/OverviewCharts/BetaHorizontalOverviewChart";

type Props = {
  icon: any;
  progressIcon: any;
  color: string;
  title: string;
  progress: number;
  latestValue: number;
  targetValue: number;
  baseLine: number;
  target2030: number;
  latestValueHcdGenderIndex?: number;
};

const OverviewCard: React.FC<Props> = ({
  icon,
  progressIcon,
  color,
  title,
  progress,
  latestValue,
  targetValue,
  baseLine,
  target2030,
  latestValueHcdGenderIndex,
}) => {
  return (
    <OverviewCardWrapper>
      <OverviewCardIconWrapper>
        <OverviewCardIcon src={icon} alt={""} />
        <OverviewCardTitleWrapper>{title}</OverviewCardTitleWrapper>
      </OverviewCardIconWrapper>
      <OvervireCardProgressWrapper>
        <FormattedMessage id={"overview.progress"} />
        <OvervireCardProgressValue color={color}>
          <OvervireCardProgressIcon src={progressIcon} alt={""} />
          {progress?.toFixed(2)}
        </OvervireCardProgressValue>
      </OvervireCardProgressWrapper>
      <OverviewChart
        targetValue={targetValue}
        baseLine={baseLine}
        target2030={target2030}
        latestValue={latestValue}
      />
      <BetaHorizontalOverviewChart
        latestValue={latestValue * 100}
        targetValue={targetValue * 100}
      />

      <HCDGenderIndexCard
        title={title}
        latestValue={
          latestValueHcdGenderIndex ? +latestValueHcdGenderIndex?.toFixed(2) : 0
        }
      />
    </OverviewCardWrapper>
  );
};

export default OverviewCard;
