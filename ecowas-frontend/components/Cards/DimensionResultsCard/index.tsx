import React, { useEffect, useMemo, useState } from "react";
import {
  DimensionResultHr,
  DimensionResultsCardContainer,
  DimensionResultsCardSubTitle,
  DimensionResultsCardTitle,
  DimensionResultsCardTitleWrapper,
  DimensionResultsCardWrapper,
} from "./DimensionResultsCard.style";
import { FormattedMessage } from "react-intl";
import { DimensionResultsChart } from "components/Charts/DimensionResultsCharts";
import DimensionResultsCardProgressCard from "./DimensionResultsCardProgressCard";
import {
  ECOWAS_DEFAULT_ID,
  ProgressEnum,
  ProgressIconDispatcher,
} from "utils/constants";
import { useDimensionResultsContext, useLanguageContext } from "utils/context";
import { useMutation } from "react-query";
import {
  GET_DIMENSION_RESULTS,
  getDimensionResults,
} from "utils/api-requests/dimension-results";
import {
  IOverviewValues,
  IndexDispatcher,
  LanguageDispatcher,
} from "utils/types";
import styled from "@emotion/styled";
import { CircularProgress } from "@mui/material";

const CicularLoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const DimensionResultsCard: React.FC = () => {
  const [indexKpi, setIndexKpi] = useState<IOverviewValues>();
  const [kpis, setKpis] = useState<IOverviewValues[]>([]);
  const { index, country } = useDimensionResultsContext();
  const { language } = useLanguageContext();

  const { mutate: getDimensionResult, isLoading } = useMutation(
    [GET_DIMENSION_RESULTS],
    getDimensionResults,
    {
      onSuccess: (data) => {
        const parent = data.find((kpi) => !kpi.kpi.parent);
        setIndexKpi(parent);
        const children = data.filter((kpi) => kpi.kpi.parent);
        setKpis(children || []);
      },
    }
  );

  useEffect(() => {
    getDimensionResult({
      country: country?.id || ECOWAS_DEFAULT_ID,
      kpi: index,
    });
  }, [country, getDimensionResult, index]);

  const hasLength = useMemo(() => {
    return kpis.length > 1;
  }, [kpis.length]);

  return isLoading ? (
    <CicularLoaderWrapper>
      <CircularProgress color="success" />
    </CicularLoaderWrapper>
  ) : (
    <>
      {indexKpi && (
        <>
          <DimensionResultsCardWrapper>
            <DimensionResultsCardContainer>
              <DimensionResultsCardTitleWrapper>
                <DimensionResultsCardTitle>
                  <FormattedMessage id={IndexDispatcher[index].title} />
                </DimensionResultsCardTitle>
                <DimensionResultsCardSubTitle>
                  <FormattedMessage
                    id={"dimensionResults.scale"}
                    values={{ scale: "0-1" }}
                  />
                </DimensionResultsCardSubTitle>
              </DimensionResultsCardTitleWrapper>
              <DimensionResultsChart
                targetValue={indexKpi.targetLatestValue}
                baseLine={indexKpi.baselineNormalized}
                latestValue={indexKpi.latestValueNormalized}
              />
              <DimensionResultsCardProgressCard
                progress={indexKpi.progressMade}
                progressIcon={
                  ProgressIconDispatcher[
                    indexKpi.progressMade > 0
                      ? ProgressEnum.UP
                      : +indexKpi.progressMade?.toFixed(2)
                      ? ProgressEnum.NEUTRAL
                      : ProgressEnum.DOWN
                  ].icon
                }
                color={
                  ProgressIconDispatcher[
                    indexKpi.progressMade > 0
                      ? ProgressEnum.UP
                      : +indexKpi.progressMade?.toFixed(2)
                      ? ProgressEnum.NEUTRAL
                      : ProgressEnum.DOWN
                  ].color
                }
                latestValueNormalized={indexKpi.latestValueNormalized * 100}
                targetValue={indexKpi.targetLatestValueNormalized * 100}
              />
            </DimensionResultsCardContainer>
          </DimensionResultsCardWrapper>
        </>
      )}
      {hasLength && (
        <>
          <DimensionResultsCardWrapper>
            {kpis?.map((data, index) => (
              <>
                <DimensionResultsCardContainer>
                  <DimensionResultsCardTitleWrapper>
                    <DimensionResultsCardTitle>
                      {data.kpi[LanguageDispatcher[language].label]}
                    </DimensionResultsCardTitle>
                    <DimensionResultsCardSubTitle>
                      <FormattedMessage
                        id={
                          data.kpi[LanguageDispatcher[language].description] &&
                          data.kpi[LanguageDispatcher[language].description] !==
                            ""
                            ? data.kpi[LanguageDispatcher[language].description]
                            : "dimensionResults.scale"
                        }
                        values={{ scale: "0-1" }}
                      />
                    </DimensionResultsCardSubTitle>
                  </DimensionResultsCardTitleWrapper>
                  <DimensionResultsChart
                    targetValue={data.targetLatestValueNormalized}
                    baseLine={data.baselineNormalized}
                    latestValue={data.latestValueNormalized}
                  />
                  <DimensionResultsCardProgressCard
                    progress={data.progressMade}
                    progressIcon={
                      ProgressIconDispatcher[
                        data.progressMade > 0
                          ? ProgressEnum.UP
                          : +data.progressMade?.toFixed(2) === 0
                          ? ProgressEnum.NEUTRAL
                          : ProgressEnum.DOWN
                      ].icon
                    }
                    color={
                      ProgressIconDispatcher[
                        data.progressMade > 0
                          ? ProgressEnum.UP
                          : +data.progressMade?.toFixed(2) === 0
                          ? ProgressEnum.NEUTRAL
                          : ProgressEnum.DOWN
                      ].color
                    }
                    latestValueNormalized={data.latestValueNormalized * 100}
                    targetValue={data.targetLatestValueNormalized * 100}
                  />
                </DimensionResultsCardContainer>
                {hasLength && index != kpis.length - 1 && <DimensionResultHr />}
              </>
            ))}
          </DimensionResultsCardWrapper>
        </>
      )}
    </>
  );
};

export default DimensionResultsCard;
