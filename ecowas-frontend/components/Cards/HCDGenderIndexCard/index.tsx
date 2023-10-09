import React, { useEffect } from "react";
import {
  HCDGenderIndexCardWrapper,
  HCDGenderIndexTableContainer,
} from "./HCDGenderIndexCard.style";
import HCDGenderIndexCardHeader from "./HCDGenderIndexCardHeader";
import { useQueryClient } from "react-query";
import { GET_COUNTRIES } from "utils/api-requests/global";
import { ICountry } from "utils/types";
import HCDGenderIndexRow from "./HCDGenderIndexRow";

const HCDGenderIndexCard: React.FC = () => {
  const queryClient = useQueryClient();

  const countries = queryClient.getQueryData(GET_COUNTRIES) as ICountry[];

  return (
    <HCDGenderIndexCardWrapper>
      <HCDGenderIndexTableContainer>
        <HCDGenderIndexCardHeader />
        <tbody>
          {countries &&
            countries.map((country) => (
              <HCDGenderIndexRow country={country} key={country.id} />
            ))}
        </tbody>
      </HCDGenderIndexTableContainer>
    </HCDGenderIndexCardWrapper>
  );
};

export default HCDGenderIndexCard;
