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
  const { data: values, mutate: getHCDGenderIndexRow } = useMutation(
    [GET_ALL_INDEX_KPIS],
    getOverviewValues
  );
  useEffect(() => {
    getHCDGenderIndexRow(country.id);
  }, [country.id, getHCDGenderIndexRow]);

  return (
    <HCDGenderIndexTableRow>
      <HCDGenderIndexTableCell>{country.label}</HCDGenderIndexTableCell>
      {values?.map((value) => (
        <ValuedHCDGenderIndexTableCell
          key={value.id}
          opacity={value.target2030Normalized * 100}
        >
          {value.target2030.toFixed(2)}
        </ValuedHCDGenderIndexTableCell>
      ))}
    </HCDGenderIndexTableRow>
  );
};

export default HCDGenderIndexRow;
