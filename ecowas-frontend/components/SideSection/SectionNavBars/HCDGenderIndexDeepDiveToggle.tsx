import React from "react";
import {
  CountryComparisonNavBarWrapper,
  HCDDeepDiveNavigationListItem,
  HCDDeepDiveNavigationListWrapper,
} from "./SectionNavBars.style";
import { useHCDGenderIndexDeepDiveContext } from "utils/context/HCDGenderIndexDeepDiveContext";
import { IKPI } from "utils/types";
import { useLanguageContext } from "utils/context";
import { LANGUAGES } from "utils/constants";

type Props = {
  kpis: IKPI[];
};

const HCDGenderIndexDeepDiveToggle: React.FC<Props> = ({ kpis }) => {
  const { valueType, setValueType } = useHCDGenderIndexDeepDiveContext();
  const handlesClickedValue = (value: IKPI) => {
    setValueType(value.id);
  };
  return (
    <CountryComparisonNavBarWrapper>
      <HCDDeepDiveNavigationListWrapper backgroundColor="#D7D7D7">
        {kpis.map((kpi) => (
          <HCDDeepDiveNavigationListItem
            key={kpi.id}
            onClick={() => handlesClickedValue(kpi)}
            isClicked={valueType === kpi.id}
            backgroundColor={"#D7D7D7"}
          >
            {kpi.label}
          </HCDDeepDiveNavigationListItem>
        ))}
      </HCDDeepDiveNavigationListWrapper>
    </CountryComparisonNavBarWrapper>
  );
};

export default HCDGenderIndexDeepDiveToggle;
