import React from "react";
import {
  CountryComparisonNavBarWrapper,
  HCDDeepDiveNavigationListItem,
  HCDDeepDiveNavigationListWrapper,
} from "./SectionNavBars.style";
import { useHCDGenderIndexDeepDiveContext } from "utils/context/HCDGenderIndexDeepDiveContext";
import { IKPI, LanguageDispatcher } from "utils/types";
import { useLanguageContext } from "utils/context";

type Props = {
  kpis: IKPI[];
};

const HCDGenderIndexDeepDiveToggle: React.FC<Props> = ({ kpis }) => {
  const { valueType, setValueType } = useHCDGenderIndexDeepDiveContext();
  const handlesClickedValue = (value: IKPI) => {
    setValueType(value.id);
  };
  const { language } = useLanguageContext();
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
            {kpi[LanguageDispatcher[language].label]}
          </HCDDeepDiveNavigationListItem>
        ))}
      </HCDDeepDiveNavigationListWrapper>
    </CountryComparisonNavBarWrapper>
  );
};

export default HCDGenderIndexDeepDiveToggle;
