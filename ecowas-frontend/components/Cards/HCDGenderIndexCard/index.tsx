import React from "react";
import {
  HCDGenderIndexCardWrapper,
  HCDGenderIndexTableContainer,
} from "./HCDGenderIndexCard.style";
import HCDGenderIndexCardHeader from "./HCDGenderIndexCardHeader";
import { useQuery } from "react-query";
import HCDGenderIndexRow from "./HCDGenderIndexRow";
import {
  GET_COUNTRIES_INDEX,
  getCountriesKpisIndex,
} from "utils/api-requests/hcd-gender-index";
import { CicularLoaderWrapper } from "components/Maps/HCDMap/HCDMap.style";
import { CircularProgress } from "@mui/material";

const HCDGenderIndexCard: React.FC = () => {
  const { data: countriesIndex, isLoading } = useQuery(
    [GET_COUNTRIES_INDEX],
    getCountriesKpisIndex
  );

  return !isLoading ? (
    <HCDGenderIndexCardWrapper>
      <HCDGenderIndexTableContainer>
        <HCDGenderIndexCardHeader />
        <tbody>
          {countriesIndex?.map((country) => (
            <HCDGenderIndexRow country={country} key={country.id} />
          ))}
        </tbody>
      </HCDGenderIndexTableContainer>
    </HCDGenderIndexCardWrapper>
  ) : (
    <CicularLoaderWrapper>
      <CircularProgress color="success" />
    </CicularLoaderWrapper>
  );
};

export default HCDGenderIndexCard;
