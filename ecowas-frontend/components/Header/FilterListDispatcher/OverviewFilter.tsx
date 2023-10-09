import { FormControlLabel, ListItem } from "@mui/material";
import React from "react";
import {
  FilterCheckbox,
  FitlerCheckboxCheckedIcon,
  FitlerCheckboxIcon,
  FitlerListItemTitle,
  FitlerListItemWrapper,
} from "./FilterListDispatcher.style";
import { useQueryClient } from "react-query";
import { GET_COUNTRIES } from "utils/api-requests/global";
import { useOverviewContext } from "utils/context";
import { ICountry } from "utils/types";

const OverviewFilter: React.FC = () => {
  const queryClient = useQueryClient();

  const countries = queryClient.getQueryData(GET_COUNTRIES) as ICountry[];
  const { setInitialCountry, country: chosenCountry } = useOverviewContext();
  const handleChange = (countryId: number) => {
    setInitialCountry(countryId);
  };

  return (
    <>
      <ListItem disablePadding>
        <FitlerListItemWrapper>
          <FitlerListItemTitle>{"Regions"}</FitlerListItemTitle>
          {countries?.map((country) => (
            <FormControlLabel
              key={country.id}
              label={country.label}
              sx={{
                color: "gray",
              }}
              control={
                <FilterCheckbox
                  onChange={() => handleChange(country.id)}
                  size="small"
                  checkedIcon={<FitlerCheckboxCheckedIcon />}
                  icon={<FitlerCheckboxIcon />}
                  checked={chosenCountry?.id === country.id}
                />
              }
            />
          ))}
        </FitlerListItemWrapper>
      </ListItem>
    </>
  );
};

export default OverviewFilter;
