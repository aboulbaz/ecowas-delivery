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
          color={
            !HCDValue.latestValue
              ? "#e0824e"
              : interpolateColor(HCDValue.latestValue / 1.5)
          }
        >
          {HCDValue.latestValue ? HCDValue.latestValue?.toFixed(2) : "N.A."}
        </ValuedHCDGenderIndexTableCell>
      )}
      {HealtValue && (
        <ValuedHCDGenderIndexTableCell
          color={
            !HealtValue.latestValue
              ? "#e0824e"
              : interpolateColor(HealtValue.latestValue / 1.5)
          }
        >
          {HealtValue.latestValue ? HealtValue.latestValue?.toFixed(2) : "N.A."}
        </ValuedHCDGenderIndexTableCell>
      )}
      {EducationValue && (
        <ValuedHCDGenderIndexTableCell
          color={
            !EducationValue.latestValue
              ? "#e0824e"
              : interpolateColor(EducationValue.latestValue / 1.5)
          }
        >
          {EducationValue.latestValue
            ? EducationValue.latestValue?.toFixed(2)
            : "N.A."}
        </ValuedHCDGenderIndexTableCell>
      )}
      {EntrepreneurshipValue && (
        <ValuedHCDGenderIndexTableCell
          color={
            !EntrepreneurshipValue.latestValue
              ? "#e0824e"
              : interpolateColor(EntrepreneurshipValue.latestValue / 1.5)
          }
        >
          {EntrepreneurshipValue.latestValue
            ? EntrepreneurshipValue.latestValue?.toFixed(2)
            : "N.A."}
        </ValuedHCDGenderIndexTableCell>
      )}
    </HCDGenderIndexTableRow>
  );
};

export default HCDGenderIndexRow;
