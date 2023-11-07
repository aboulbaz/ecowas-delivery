import React, { useReducer } from "react";
import {
  CustomMenu,
  CustomMenuItem,
  DimensionResultsNavBarTitle,
  DimensionResultsNavBarWrapper,
  DropdownIconWrapper,
  NavBarWrapper,
  NavigationListItem,
  NavigationListWrapper,
} from "./SectionNavBars.style";
import Image from "next/image";
import LocationIcon from "public/assets/icons/location-icon.svg";
import DropdownIcon from "public/assets/icons/dropwdown-icon.svg";
import { useCountryResultsContext } from "utils/context";
import { VALUES_TYPE, ValuesTypeRecord } from "utils/constants";
import { FormattedMessage } from "react-intl";

interface CountryResultsNavBarState {
  anchorEl: any;
  clickedValue: VALUES_TYPE;
}

const initialStates: CountryResultsNavBarState = {
  anchorEl: null,
  clickedValue: VALUES_TYPE.ALL,
};

type Actions =
  | { type: "SET_ANCHOREL"; payload: any }
  | { type: "SET_CLICKED_VALUE"; payload: VALUES_TYPE };

const reducer = (state: CountryResultsNavBarState, action: Actions) => {
  switch (action.type) {
    case "SET_ANCHOREL":
      return {
        ...state,
        anchorEl: action.payload,
      };
    case "SET_CLICKED_VALUE":
      return {
        ...state,
        clickedValue: action.payload,
      };
  }
};

const CountryResultsNavBar: React.FC = () => {
  const { country, setCountry, countries, setValueType } =
    useCountryResultsContext();

  const [state, dispatch] = useReducer(reducer, initialStates);
  const handleOpen = (event: React.MouseEvent) => {
    dispatch({ type: "SET_ANCHOREL", payload: event.currentTarget });
  };

  const handleClose = () => {
    dispatch({ type: "SET_ANCHOREL", payload: null });
  };

  const clickDropDown = (event: React.MouseEvent) => {
    if (!state.anchorEl) handleOpen(event);
    else handleClose();
  };

  const handleChange = (country: string) => {
    setCountry(country);
    handleClose();
  };

  const handlesClickedValue = (value: VALUES_TYPE) => {
    setValueType(value);
    dispatch({ type: "SET_CLICKED_VALUE", payload: value });
  };
  return (
    <NavBarWrapper>
      <div>
        <DimensionResultsNavBarWrapper onClick={clickDropDown}>
          <Image src={LocationIcon} alt="" height={60} />
          <DimensionResultsNavBarTitle>{country}</DimensionResultsNavBarTitle>
          <DropdownIconWrapper>
            <Image src={DropdownIcon} alt={""} width={15} />
          </DropdownIconWrapper>
        </DimensionResultsNavBarWrapper>
        <CustomMenu
          anchorEl={state.anchorEl}
          open={Boolean(state.anchorEl)}
          onClose={handleClose}
        >
          {countries.map((country) => (
            <CustomMenuItem key={country} onClick={() => handleChange(country)}>
              {country}
            </CustomMenuItem>
          ))}
        </CustomMenu>
      </div>
      <NavigationListWrapper backgroundColor="#5eb894">
        {Object.values(VALUES_TYPE).map((value) => (
          <NavigationListItem
            key={value}
            onClick={() => handlesClickedValue(value)}
            isClicked={value === state.clickedValue}
            backgroundColor={"#5eb894"}
          >
            <FormattedMessage id={ValuesTypeRecord[value]} />
          </NavigationListItem>
        ))}
      </NavigationListWrapper>
    </NavBarWrapper>
  );
};

export default CountryResultsNavBar;
