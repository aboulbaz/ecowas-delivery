import React, { useReducer } from "react";
import Image from "next/image";
import DropdownIcon from "public/assets/icons/dropwdown-icon.svg";
import LocationIcon from "public/assets/icons/location-icon.svg";

import {
  CustomMenu,
  CustomMenuItem,
  DimensionResultsNavBarTitle,
  DimensionResultsNavBarWrapper,
  DropdownIconWrapper,
  NavBarTabsContainer,
} from "./SectionNavBars.style";
import { FormattedMessage } from "react-intl";
import { useDimensionResultsContext } from "utils/context";
import { IndexEnum } from "utils/constants";
import { ICountry, IndexDispatcher } from "utils/types";
import { useQueryClient } from "react-query";
import { GET_COUNTRIES } from "utils/api-requests/global";

interface DimensionResultsNavBarState {
  anchorElIndex: any;
  anchorElCountry: any;
}

const initialStates: DimensionResultsNavBarState = {
  anchorElIndex: null,
  anchorElCountry: null,
};

type Actions =
  | { type: "SET_ANCHOREL_INDEX"; payload: any }
  | { type: "SET_ANCHOREL_COUNTRY"; payload: any };

const reducer = (state: DimensionResultsNavBarState, action: Actions) => {
  switch (action.type) {
    case "SET_ANCHOREL_INDEX":
      return {
        ...state,
        anchorElIndex: action.payload,
      };
    case "SET_ANCHOREL_COUNTRY":
      return {
        ...state,
        anchorElCountry: action.payload,
      };
  }
};

const DimensionResultsNavBar: React.FC = () => {
  const queryClient = useQueryClient();

  const countries = queryClient.getQueryData(GET_COUNTRIES) as ICountry[];
  const {
    index,
    setIndex,
    country: chosenCountry,
    setInitialCountry,
  } = useDimensionResultsContext();
  const [state, dispatch] = useReducer(reducer, initialStates);

  const handleOpenIndex = (event) => {
    dispatch({ type: "SET_ANCHOREL_INDEX", payload: event.currentTarget });
  };

  const handleOpenCountry = (event) => {
    dispatch({ type: "SET_ANCHOREL_COUNTRY", payload: event.currentTarget });
  };

  const handleCloseIndex = () => {
    dispatch({ type: "SET_ANCHOREL_INDEX", payload: null });
  };

  const handleCloseCountry = () => {
    dispatch({ type: "SET_ANCHOREL_COUNTRY", payload: null });
  };

  const clickDropDownIndex = (event) => {
    if (!state.anchorElIndex) handleOpenIndex(event);
    else handleCloseIndex();
  };

  const clickDropDownCountry = (event) => {
    if (!state.anchorElCountry) handleOpenCountry(event);
    else handleCloseCountry();
  };

  const handleChangeIndex = (index: IndexEnum) => {
    setIndex(index);
    handleCloseIndex();
  };

  const handleChangeCountry = (newCountry: number) => {
    setInitialCountry(newCountry);
    handleCloseCountry();
  };
  return (
    <NavBarTabsContainer>
      <div>
        <DimensionResultsNavBarWrapper onClick={clickDropDownIndex}>
          <Image src={IndexDispatcher[index]?.icon} alt="" height={60} />
          <DimensionResultsNavBarTitle>
            <FormattedMessage id={IndexDispatcher[index]?.title} />
          </DimensionResultsNavBarTitle>
          <DropdownIconWrapper>
            <Image src={DropdownIcon} alt={""} width={15} />
          </DropdownIconWrapper>
        </DimensionResultsNavBarWrapper>
        <CustomMenu
          anchorEl={state.anchorElIndex}
          open={Boolean(state.anchorElIndex)}
          onClose={handleCloseIndex}
        >
          <CustomMenuItem
            onClick={() => handleChangeIndex(IndexEnum.HCD_INTEGRATED_INDEX)}
          >
            <FormattedMessage id={"overview.integrated-hcd-index"} />
          </CustomMenuItem>
          <CustomMenuItem onClick={() => handleChangeIndex(IndexEnum.HEALTH)}>
            <FormattedMessage id={"overview.health"} />
          </CustomMenuItem>
          <CustomMenuItem
            onClick={() => handleChangeIndex(IndexEnum.EDUCATION)}
          >
            <FormattedMessage id={"overview.education"} />
          </CustomMenuItem>
          <CustomMenuItem
            onClick={() => handleChangeIndex(IndexEnum.ENTREPRENEURSHIP)}
          >
            <FormattedMessage id={"overview.entrepreneurship"} />
          </CustomMenuItem>
        </CustomMenu>
      </div>
      <div>
        <DimensionResultsNavBarWrapper onClick={clickDropDownCountry}>
          <Image src={LocationIcon} alt="" height={60} />
          <DimensionResultsNavBarTitle>
            {chosenCountry?.label}
          </DimensionResultsNavBarTitle>
          <DropdownIconWrapper>
            <Image src={DropdownIcon} alt={""} width={15} />
          </DropdownIconWrapper>
        </DimensionResultsNavBarWrapper>
        <CustomMenu
          anchorEl={state?.anchorElCountry}
          open={Boolean(state?.anchorElCountry)}
          onClose={handleCloseCountry}
        >
          {countries?.map((country) => (
            <CustomMenuItem
              key={country.id}
              onClick={() => handleChangeCountry(country.id)}
            >
              {country.label}
            </CustomMenuItem>
          ))}
        </CustomMenu>
      </div>
    </NavBarTabsContainer>
  );
};

export default DimensionResultsNavBar;
