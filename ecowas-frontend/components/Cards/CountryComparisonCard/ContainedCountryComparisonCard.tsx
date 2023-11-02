import React from "react";
import {
  CountryComparisonCardIndicators,
  CountryComparisonCardIndicatorsWrapper,
  CountryComparisonCardWrapper,
  CountryComparisonChart,
  CountryComparisonChartAxeIndex,
  CountryComparisonChartAxeWrapper,
  CountryComparisonChartBall,
  CountryComparisonChartBar,
  CountryComparisonChartTitle,
  CountryComparisonChartsWrapper,
  SingleCountryComparisonCardIcon,
  SingleCountryComparisonCardIndicator,
  SingleCountryComparisonCardTitle,
} from "./CountryComparisonCard.style";
import { useQueryClient } from "react-query";
import { GET_COUNTRIES } from "utils/api-requests/global";
import { ICountry, IOverviewValues } from "utils/types";
import { useCountryComparisonContext } from "utils/context/CountryComparisonContext";
import { ECOWAS_DEFAULT_ID } from "utils/constants";
import { Tooltip } from "@mui/material";
import { FormattedMessage } from "react-intl";

type CountryComparisonCardProps = {
  data: IOverviewValues[];
};

const ContainedCountryComparisonCard: React.FC<CountryComparisonCardProps> = ({
  data,
}) => {
  const queryClient = useQueryClient();

  const countries = queryClient.getQueryData(GET_COUNTRIES) as ICountry[];

  const { updateCountry, chosenCountry } = useCountryComparisonContext();

  return (
    <CountryComparisonCardWrapper isContained>
      <CountryComparisonCardIndicatorsWrapper>
        <CountryComparisonCardIndicators>
          <SingleCountryComparisonCardIndicator>
            <SingleCountryComparisonCardIcon color="#00834F" />
            <SingleCountryComparisonCardTitle>
              <FormattedMessage id={"overview.baseline"} />
            </SingleCountryComparisonCardTitle>
          </SingleCountryComparisonCardIndicator>
          <SingleCountryComparisonCardIndicator>
            <SingleCountryComparisonCardIcon color="#21C080" />
            <SingleCountryComparisonCardTitle>
              <FormattedMessage id={"overview.latest"} />
            </SingleCountryComparisonCardTitle>
          </SingleCountryComparisonCardIndicator>
          <SingleCountryComparisonCardIndicator>
            <SingleCountryComparisonCardIcon color="#6DE5B5" />
            <SingleCountryComparisonCardTitle>
              <FormattedMessage id={"overview.target-latest-value"} />
            </SingleCountryComparisonCardTitle>
          </SingleCountryComparisonCardIndicator>
          <SingleCountryComparisonCardIndicator>
            <SingleCountryComparisonCardIcon color="#E0824E" />
            <SingleCountryComparisonCardTitle>
              <FormattedMessage id={"overview.target-2030"} />
            </SingleCountryComparisonCardTitle>
          </SingleCountryComparisonCardIndicator>
        </CountryComparisonCardIndicators>
      </CountryComparisonCardIndicatorsWrapper>
      <CountryComparisonChartsWrapper>
        {countries?.map((country, index) => {
          const singleData = data.find(
            (value) => value.country.id === country.id
          );
          return (
            singleData && (
              <CountryComparisonChart
                key={index}
                isContained
                onClick={() => {
                  country.id !== chosenCountry
                    ? updateCountry(country.id)
                    : updateCountry(ECOWAS_DEFAULT_ID);
                }}
              >
                <CountryComparisonChartTitle
                  isPrimary={singleData.country.id === ECOWAS_DEFAULT_ID}
                >
                  {country.label}
                </CountryComparisonChartTitle>
                <CountryComparisonChartBar
                  isContained
                  isClicked={
                    country.id === chosenCountry ||
                    chosenCountry === ECOWAS_DEFAULT_ID
                  }
                >
                  <Tooltip
                    title={singleData.baseline.toFixed(2)}
                    placement="top"
                    arrow
                  >
                    <CountryComparisonChartBall
                      color="#00834F"
                      hoverColor="#777"
                      value={singleData.baselineNormalized * 100}
                      isClicked={
                        country.id === chosenCountry ||
                        chosenCountry === ECOWAS_DEFAULT_ID
                      }
                    />
                  </Tooltip>
                  <Tooltip
                    title={singleData.latestValue.toFixed(2)}
                    placement="top"
                    arrow
                  >
                    <CountryComparisonChartBall
                      color="#21C080"
                      hoverColor="#989898"
                      value={singleData.latestValueNormalized * 100}
                      isClicked={
                        country.id === chosenCountry ||
                        chosenCountry === ECOWAS_DEFAULT_ID
                      }
                    />
                  </Tooltip>
                  <Tooltip
                    title={singleData.targetLatestValue.toFixed(2)}
                    placement="top"
                    arrow
                  >
                    <CountryComparisonChartBall
                      color="#6DE5B5"
                      hoverColor="#C5C5C5"
                      value={singleData.targetLatestValueNormalized * 100}
                      isClicked={
                        country.id === chosenCountry ||
                        chosenCountry === ECOWAS_DEFAULT_ID
                      }
                    />
                  </Tooltip>
                  <Tooltip
                    title={singleData.target2030.toFixed(2)}
                    placement="top"
                    arrow
                  >
                    <CountryComparisonChartBall
                      color="#E0824E"
                      hoverColor="#949494"
                      value={singleData.target2030Normalized * 100}
                      isClicked={
                        country.id === chosenCountry ||
                        chosenCountry === ECOWAS_DEFAULT_ID
                      }
                    />
                  </Tooltip>
                </CountryComparisonChartBar>
              </CountryComparisonChart>
            )
          );
        })}
        <CountryComparisonChart isContained>
          <CountryComparisonChartTitle></CountryComparisonChartTitle>
          <CountryComparisonChartAxeWrapper>
            <CountryComparisonChartAxeIndex>0</CountryComparisonChartAxeIndex>
            <CountryComparisonChartAxeIndex>0.2</CountryComparisonChartAxeIndex>
            <CountryComparisonChartAxeIndex>0.4</CountryComparisonChartAxeIndex>
            <CountryComparisonChartAxeIndex>0.6</CountryComparisonChartAxeIndex>
            <CountryComparisonChartAxeIndex>0.8</CountryComparisonChartAxeIndex>
            <CountryComparisonChartAxeIndex>1</CountryComparisonChartAxeIndex>
          </CountryComparisonChartAxeWrapper>
        </CountryComparisonChart>
      </CountryComparisonChartsWrapper>
    </CountryComparisonCardWrapper>
  );
};

export default ContainedCountryComparisonCard;
