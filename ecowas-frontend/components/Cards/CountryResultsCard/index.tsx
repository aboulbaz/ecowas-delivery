import React, { useEffect } from "react";
import { useCountryResultsContext, useLanguageContext } from "utils/context";
import {
  CountryResultsCardWrapper,
  CountryResultsTableContainer,
} from "./CountryResultsCard.style";
import { VALUES_TYPE } from "utils/constants";
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
import { ICountry, LanguageDispatcher } from "utils/types";
import CountryResultsRow from "./CountryResultsRow";
import styled from "@emotion/styled";
import { CircularProgress } from "@mui/material";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country, countries]);


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
        <tbody>
          {kpiValues?.map((kpiValue) => (
            <CountryResultsRow
              key={kpiValue.id}
              title={kpiValue.kpi[LanguageDispatcher[language].label]}
              description={kpiValue.kpi[LanguageDispatcher[language].description]}
              valueType={valueType}
              baseline={+kpiValue.baseline?.toFixed(2)}
              baselineNormalized={+kpiValue.baselineNormalized?.toFixed(2)}
              latestValue={+kpiValue.latestValue?.toFixed(2)}
              latestValueNormalized={+kpiValue.latestValueNormalized?.toFixed(2)}
              targetForLatest={+kpiValue.targetLatestValue?.toFixed(2)}
              targetForLatestNormalized={
                +kpiValue.targetLatestValueNormalized?.toFixed(2)
              }
              target2030={+kpiValue.target2030?.toFixed(2)}
              target2030Normalized={+kpiValue.target2030Normalized?.toFixed(2)}
              rank={kpiValue.ranking}
            />
          ))}
        </tbody>
      </CountryResultsTableContainer>
    </CountryResultsCardWrapper>
  );
};

export default CountryResultsCard;
