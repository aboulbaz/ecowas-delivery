import React from "react";
import {
  HCDGenderIndexLatestValue,
  HCDGenderIndexLatestValueLabel,
  HCDGenderIndexTitle,
  HCDGenderIndexTitleLabel,
  HCDGenderIndexWrapper,
} from "./OverviewCard.style";
import { FormattedMessage } from "react-intl";

type Props = {
  title: string;
  latestValue: number;
};

const HCDGenderIndexCard: React.FC<Props> = ({ title, latestValue }) => {
  return (
    <HCDGenderIndexWrapper>
      <HCDGenderIndexTitleLabel>
        <FormattedMessage id={"overview.hcd-gender-index.title-label"} />
      </HCDGenderIndexTitleLabel>
      <HCDGenderIndexTitle>{title}</HCDGenderIndexTitle>
      <HCDGenderIndexLatestValueLabel>
        <FormattedMessage id={"overview.hcd-gender-index.latest-value"} />
      </HCDGenderIndexLatestValueLabel>
      <HCDGenderIndexLatestValue>{latestValue !== 0 ? latestValue : "N.A."}</HCDGenderIndexLatestValue>
    </HCDGenderIndexWrapper>
  );
};

export default HCDGenderIndexCard;
