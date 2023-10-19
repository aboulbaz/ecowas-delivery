import React, { useEffect } from "react";
import {
  HCDGenderIndexTableCell,
  HCDGenderIndexTableRow,
  ValuedHCDGenderIndexTableCell,
} from "./HCDGenderIndexCard.style";
import { useMutation } from "react-query";
import { GET_ALL_INDEX_KPIS } from "utils/api-requests/hcd-gender-index";
import { getOverviewValues } from "utils/api-requests/overview";
import { ICountry } from "utils/types";
import styled from "@emotion/styled";

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
          opacity={HCDValue.target2030Normalized * 100}
        >
          {HCDValue.target2030.toFixed(2)}
        </ValuedHCDGenderIndexTableCell>
      )}
      {HealtValue && (
        <ValuedHCDGenderIndexTableCell
          opacity={HealtValue.target2030Normalized * 100}
        >
          {HealtValue.target2030.toFixed(2)}
        </ValuedHCDGenderIndexTableCell>
      )}
      {EducationValue && (
        <ValuedHCDGenderIndexTableCell
          opacity={EducationValue.target2030Normalized * 100}
        >
          {EducationValue.target2030.toFixed(2)}
        </ValuedHCDGenderIndexTableCell>
      )}
      {EntrepreneurshipValue && (
        <ValuedHCDGenderIndexTableCell
          opacity={EntrepreneurshipValue.target2030Normalized * 100}
        >
          {EntrepreneurshipValue.target2030.toFixed(2)}
        </ValuedHCDGenderIndexTableCell>
      )}
    </HCDGenderIndexTableRow>
  );
};

export default HCDGenderIndexRow;
