import React from "react";
import {
  HCDGenderIndexTableCell,
  HCDGenderIndexTableRow,
  ValuedHCDGenderIndexTableCell,
} from "./HCDGenderIndexCard.style";
import { ICountry } from "utils/types";
import { interpolateColor } from "utils/functions";

type Props = {
  country: ICountry;
};

const HCDGenderIndexRow: React.FC<Props> = ({ country }) => {
  const HCDValue = country.kpiValues?.find((val) => val.kpi.id === 22);
  const HealtValue = country.kpiValues?.find((val) => val.kpi.id === 1);
  const EducationValue = country.kpiValues?.find((val) => val.kpi.id === 9);
  const EntrepreneurshipValue = country.kpiValues?.find(
    (val) => val.kpi.id === 18
  );

  return (
    <HCDGenderIndexTableRow>
      <HCDGenderIndexTableCell>{country.label}</HCDGenderIndexTableCell>
      {HCDValue && (
        <ValuedHCDGenderIndexTableCell
          color={interpolateColor(HCDValue.target2030Normalized)}
        >
          {HCDValue.target2030.toFixed(2)}
        </ValuedHCDGenderIndexTableCell>
      )}
      {HealtValue && (
        <ValuedHCDGenderIndexTableCell
          color={interpolateColor(HealtValue.target2030Normalized)}
        >
          {HealtValue.target2030.toFixed(2)}
        </ValuedHCDGenderIndexTableCell>
      )}
      {EducationValue && (
        <ValuedHCDGenderIndexTableCell
          color={interpolateColor(EducationValue.target2030Normalized)}
        >
          {EducationValue.target2030.toFixed(2)}
        </ValuedHCDGenderIndexTableCell>
      )}
      {EntrepreneurshipValue && (
        <ValuedHCDGenderIndexTableCell
          color={interpolateColor(EntrepreneurshipValue.target2030Normalized)}
        >
          {EntrepreneurshipValue.target2030.toFixed(2)}
        </ValuedHCDGenderIndexTableCell>
      )}
    </HCDGenderIndexTableRow>
  );
};

export default HCDGenderIndexRow;
