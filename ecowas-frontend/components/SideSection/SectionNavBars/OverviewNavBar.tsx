import React, { useReducer } from "react";
import {
  CustomMenu,
  CustomMenuItem,
  DimensionResultsNavBarTitle,
  DimensionResultsNavBarWrapper,
  DropdownIconWrapper,
  NavBarWrapper,
} from "./SectionNavBars.style";
import Image from "next/image";
import LocationIcon from "public/assets/icons/location-icon.svg";
import DropdownIcon from "public/assets/icons/dropwdown-icon.svg";
import { useOverviewContext } from "utils/context";
import { useQueryClient } from "react-query";
import { GET_COUNTRIES } from "utils/api-requests/global";
import { ICountry } from "utils/types";

interface OverviewNavBarState {
  anchorEl: any;
}

const initialStates: OverviewNavBarState = {
  anchorEl: null,
};

type Actions = { type: "SET_ANCHOREL"; payload: any };

const reducer = (state: OverviewNavBarState, action: Actions) => {
  switch (action.type) {
    case "SET_ANCHOREL":
      return {
        ...state,
        anchorEl: action.payload,
      };
  }
};

const OverviewNavBar: React.FC = () => {
  const queryClient = useQueryClient();

  const countries = queryClient.getQueryData(GET_COUNTRIES) as ICountry[];
  const { setInitialCountry, country: chosenCountry } = useOverviewContext();

  const [state, dispatch] = useReducer(reducer, initialStates);
  const handleOpen = (event: React.MouseEvent) => {
    dispatch({ type: "SET_ANCHOREL", payload: event.currentTarget });
  };

  const handleClose = () => {
    dispatch({ type: "SET_ANCHOREL", payload: null });
  };

  const clickDropDown = (event: React.MouseEvent) => {
    if (!state?.anchorEl) handleOpen(event);
    else handleClose();
  };

  const handleChange = (country: number) => {
    setInitialCountry(country);
    handleClose();
  };

  return (
    <NavBarWrapper>
      <div>
        <DimensionResultsNavBarWrapper onClick={clickDropDown}>
          <Image src={LocationIcon} alt="" height={60} />
          <DimensionResultsNavBarTitle>
            {chosenCountry?.label}
          </DimensionResultsNavBarTitle>
          <DropdownIconWrapper>
            <Image src={DropdownIcon} alt={""} width={15} />
          </DropdownIconWrapper>
        </DimensionResultsNavBarWrapper>
        <CustomMenu
          anchorEl={state?.anchorEl}
          open={Boolean(state?.anchorEl)}
          onClose={handleClose}
        >
          {countries?.map((country) => (
            <CustomMenuItem
              key={country.id}
              onClick={() => handleChange(country.id)}
            >
              {country.label}
            </CustomMenuItem>
          ))}
        </CustomMenu>
      </div>
    </NavBarWrapper>
  );
};

export default OverviewNavBar;
