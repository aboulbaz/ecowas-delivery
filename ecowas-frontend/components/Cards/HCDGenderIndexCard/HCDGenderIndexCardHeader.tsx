import React from "react";
import {
  HCDGenderIndexTableCell,
  HCDGenderIndexTableCellTitle,
  HCDGenderIndexTableCellWrapper,
  HCDGenderIndexTableHead,
  HCDGenderIndexTableRow,
  MapMetric,
  MapMetricLabel,
  MapMetricTitle,
  MapMetricWrapper,
} from "./HCDGenderIndexCard.style";
import Image from "next/image";
import { IconDispatcher } from "utils/api-requests/overview";
import { FormattedMessage } from "react-intl";

const HCDGenderIndexCardHeader: React.FC = () => {
  return (
    <HCDGenderIndexTableHead>
      <HCDGenderIndexTableRow>
        <HCDGenderIndexTableCell>
          <MapMetricWrapper>
            <MapMetricTitle>
              <FormattedMessage id={"HcdGenderIndex.performance"} />
            </MapMetricTitle>
            <MapMetricLabel>
              <FormattedMessage id={"HcdGenderIndex.very-strong"} />
            </MapMetricLabel>
            <MapMetric />
            <MapMetricLabel>
              <FormattedMessage id={"HcdGenderIndex.low"} />
            </MapMetricLabel>
          </MapMetricWrapper>
        </HCDGenderIndexTableCell>

        <HCDGenderIndexTableCell>
          <HCDGenderIndexTableCellWrapper>
            <Image src={IconDispatcher[22].icon} height={50} alt="" />
            <HCDGenderIndexTableCellTitle>
              <FormattedMessage id={IconDispatcher[22].title} />
            </HCDGenderIndexTableCellTitle>
          </HCDGenderIndexTableCellWrapper>
        </HCDGenderIndexTableCell>
        <HCDGenderIndexTableCell>
          <HCDGenderIndexTableCellWrapper>
            <Image src={IconDispatcher[1].icon} height={50} alt="" />
            <HCDGenderIndexTableCellTitle>
              <FormattedMessage id={IconDispatcher[1].title} />
            </HCDGenderIndexTableCellTitle>
          </HCDGenderIndexTableCellWrapper>
        </HCDGenderIndexTableCell>
        <HCDGenderIndexTableCell>
          <HCDGenderIndexTableCellWrapper>
            <Image src={IconDispatcher[9].icon} height={50} alt="" />
            <HCDGenderIndexTableCellTitle>
              <FormattedMessage id={IconDispatcher[9].title} />
            </HCDGenderIndexTableCellTitle>
          </HCDGenderIndexTableCellWrapper>
        </HCDGenderIndexTableCell>
        <HCDGenderIndexTableCell>
          <HCDGenderIndexTableCellWrapper>
            <Image src={IconDispatcher[18].icon} height={50} alt="" />
            <HCDGenderIndexTableCellTitle>
              <FormattedMessage id={IconDispatcher[18].title} />
            </HCDGenderIndexTableCellTitle>
          </HCDGenderIndexTableCellWrapper>
        </HCDGenderIndexTableCell>
      </HCDGenderIndexTableRow>
    </HCDGenderIndexTableHead>
  );
};

export default HCDGenderIndexCardHeader;
