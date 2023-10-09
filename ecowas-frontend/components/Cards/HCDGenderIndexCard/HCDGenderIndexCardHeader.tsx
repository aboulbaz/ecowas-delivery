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
import { useHCDGenderIndexContext } from "utils/context/HCDGenderIndexContext";
import { useQuery } from "react-query";
import {
  GET_ALL_MAIN_KPIS,
  getAllMainKpis,
} from "utils/api-requests/hcd-gender-index";
import Image from "next/image";
import { IconDispatcher } from "utils/api-requests/overview";
import { FormattedMessage } from "react-intl";

const HCDGenderIndexCardHeader: React.FC = () => {
  const {} = useHCDGenderIndexContext();

  const { data: kpis } = useQuery([GET_ALL_MAIN_KPIS], getAllMainKpis);

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

        {kpis?.map((kpi) => (
          <HCDGenderIndexTableCell key={kpi.id}>
            <HCDGenderIndexTableCellWrapper>
              <Image src={IconDispatcher[kpi.id].icon} height={50} alt="" />
              <HCDGenderIndexTableCellTitle>
                {kpi.label}
              </HCDGenderIndexTableCellTitle>
            </HCDGenderIndexTableCellWrapper>
          </HCDGenderIndexTableCell>
        ))}
      </HCDGenderIndexTableRow>
    </HCDGenderIndexTableHead>
  );
};

export default HCDGenderIndexCardHeader;
