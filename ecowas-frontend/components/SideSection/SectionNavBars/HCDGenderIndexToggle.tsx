import React from "react";
import {
  CountryComparisonNavBarWrapper,
  NavigationListItem,
  NavigationListWrapper,
} from "./SectionNavBars.style";
import { useHCDGenderIndexContext } from "utils/context/HCDGenderIndexContext";

const HCDGenderIndexToggle: React.FC = () => {
  const { isDimensionView, setIsDimensionView } = useHCDGenderIndexContext();
  const handlesClickedValue = (value: boolean) => {
    setIsDimensionView(value);
  };
  return (
    <CountryComparisonNavBarWrapper>
      <NavigationListWrapper backgroundColor="#D7D7D7">
        <NavigationListItem
          onClick={() => handlesClickedValue(false)}
          isClicked={!isDimensionView}
          backgroundColor={"#D7D7D7"}
        >
          Table View
        </NavigationListItem>
        <NavigationListItem
          onClick={() => handlesClickedValue(true)}
          isClicked={isDimensionView}
          backgroundColor={"#D7D7D7"}
        >
          Map View
        </NavigationListItem>
      </NavigationListWrapper>
    </CountryComparisonNavBarWrapper>
  );
};

export default HCDGenderIndexToggle;
