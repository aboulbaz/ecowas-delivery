import React from "react";
import {
  HCDGenderIndexTableCell,
  HCDGenderIndexTableRow,
  ValuedHCDGenderIndexTableCell,
} from "./HCDGenderIndexCard.style";
import { ICountry } from "utils/types";
import { interpolateColor } from "utils/functions";
import { IndexEnumHCDGenderIndex } from "utils/constants";

type Props = {
  country: ICountry;
};

const HCDGenderIndexRow: React.FC<Props> = ({ country }) => {
  const HCDValue = country.kpiValues?.find(
    (val) => val.kpi.id === IndexEnumHCDGenderIndex.HCD_INTEGRATED_INDEX
  );
  const HealtValue = country.kpiValues?.find(
    (val) => val.kpi.id === IndexEnumHCDGenderIndex.HEALTH
  );
  const EducationValue = country.kpiValues?.find(
    (val) => val.kpi.id === IndexEnumHCDGenderIndex.EDUCATION
  );
  const EntrepreneurshipValue = country.kpiValues?.find(
    (val) => val.kpi.id === IndexEnumHCDGenderIndex.ENTREPRENEURSHIP
  );

  return (
    <HCDGenderIndexTableRow>
      <HCDGenderIndexTableCell>{country.label}</HCDGenderIndexTableCell>
      {HCDValue && (
        <ValuedHCDGenderIndexTableCell
          color={interpolateColor(HCDValue.latestValue / 1.5)}
        >
          {HCDValue.latestValue?.toFixed(2)}
        </ValuedHCDGenderIndexTableCell>
      )}
      {HealtValue && (
        <ValuedHCDGenderIndexTableCell
          color={interpolateColor(HealtValue.latestValue / 1.5)}
        >
          {HealtValue.latestValue?.toFixed(2)}
        </ValuedHCDGenderIndexTableCell>
      )}
      {EducationValue && (
        <ValuedHCDGenderIndexTableCell
          color={interpolateColor(EducationValue.latestValue / 1.5)}
        >
          {EducationValue.latestValue?.toFixed(2)}
        </ValuedHCDGenderIndexTableCell>
      )}
      {EntrepreneurshipValue && (
        <ValuedHCDGenderIndexTableCell
          color={interpolateColor(EntrepreneurshipValue.latestValue / 1.5)}
        >
          {EntrepreneurshipValue.latestValue?.toFixed(2)}
        </ValuedHCDGenderIndexTableCell>
      )}
    </HCDGenderIndexTableRow>
  );
};

export default HCDGenderIndexRow;
