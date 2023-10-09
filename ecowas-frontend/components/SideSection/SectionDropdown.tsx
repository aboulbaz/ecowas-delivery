import React from "react";
import { SectionDropdownWrapper } from "./SideSection.style";
import { Routes } from "utils/constants";
import { useRouter } from "next/router";
import { DimensionResultsNavBar } from "./SectionNavBars";
import CountryResultsNavBar from "./SectionNavBars/CountryResultsNavBar";
import CountryComparisonNavBar from "./SectionNavBars/CountryComparisonNavBar";
import HCDGenderIndexnavBar from "./SectionNavBars/HCDGenderIndexnavBar";
import HCDGenderIndexDeepDivenavBar from "./SectionNavBars/HCDGenderIndexDeepDivenavBar";
import OverviewNavBar from "./SectionNavBars/OverviewNavBar";

const SectionNavBarDispatcher: Record<Partial<Routes>, React.ReactNode> = {
  [Routes.OVERVIEW]: <OverviewNavBar />,
  [Routes.DIMENSION_RESULTS]: <DimensionResultsNavBar />,
  [Routes.COUNTRY_COMPARISON]: <CountryComparisonNavBar />,
  [Routes.COUNTRY_RESULTS]: <CountryResultsNavBar />,
  [Routes.HCD_GENDER_INDEX]: <HCDGenderIndexnavBar />,
  [Routes.HCD_GENDER_INDEX_DEEP_DIVE]: <HCDGenderIndexDeepDivenavBar />,
  [Routes.METHODOLOGY]: <></>,
};

const SectionDropdown: React.FC = () => {
  const router = useRouter();
  return (
    <SectionDropdownWrapper
      shouldBeEnd={router.pathname === Routes.COUNTRY_COMPARISON}
    >
      {SectionNavBarDispatcher[router.pathname]}
    </SectionDropdownWrapper>
  );
};

export default SectionDropdown;
