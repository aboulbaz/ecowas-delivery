import React, { useEffect } from "react";
import { useCountryResultsContext, useLanguageContext } from "utils/context";
import {
  CountryResultsCardWrapper,
  CountryResultsTableContainer,
  CountryResultsTbody,
} from "./CountryResultsCard.style";
import CountryResultsCardHeader from "./CountryResultsCardHeader";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
} from "chart.js";
import "chartjs-plugin-datalabels";
import { useMutation, useQueryClient } from "react-query";
import {
  GET_COUNTRY_RESULTS,
  getCountryResults,
} from "utils/api-requests/country-results";
import { GET_COUNTRIES } from "utils/api-requests/global";
import { ICountry } from "utils/types";
import styled from "@emotion/styled";
import { CircularProgress } from "@mui/material";
import CountryResultsRowLoop from "./CountryResultsRowLoop";

ChartJS.register(CategoryScale, LinearScale, BarElement);

const CicularLoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const CountryResultsCard: React.FC = () => {
  const { country, valueType } = useCountryResultsContext();
  const { language } = useLanguageContext();
  const {
    data: kpiValues,
    mutate: getCountryResultHandler,
    isLoading,
  } = useMutation([GET_COUNTRY_RESULTS], getCountryResults);

  const queryClient = useQueryClient();

  const countries = queryClient.getQueryData(GET_COUNTRIES) as ICountry[];

  useEffect(() => {
    const countryId = countries?.find((c) => c.label === country)?.id;
    countryId && getCountryResultHandler({ country: countryId });
  }, [country, countries, getCountryResultHandler]);

  if (isLoading)
    return (
      <CicularLoaderWrapper>
        <CircularProgress color="success" />
      </CicularLoaderWrapper>
    );

  return (
    <CountryResultsCardWrapper>
      <CountryResultsTableContainer>
        <CountryResultsCardHeader />
        <CountryResultsTbody>
          <CountryResultsRowLoop
            kpiValues={kpiValues}
            language={language}
            valueType={valueType}
          />
        </CountryResultsTbody>
      </CountryResultsTableContainer>
    </CountryResultsCardWrapper>
  );
};

export default CountryResultsCard;
