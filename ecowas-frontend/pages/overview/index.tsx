import { NextPage } from "next";
import styled from "@emotion/styled";
import Layout from "components/Layout";
import { OverviewCard } from "components/Cards";
import SideSection from "components/SideSection";
import { useLanguageContext, useOverviewContext } from "utils/context";
import { useEffect, useMemo } from "react";
import { useMutation } from "react-query";
import {
  GET_OVERVIEW_VALUES,
  IconDispatcher,
  getOverviewValues,
} from "utils/api-requests/overview";
import {
  ECOWAS_DEFAULT_ID,
  ProgressEnum,
  ProgressIconDispatcher,
  intlMessagesDispatcher,
} from "utils/constants";
import { CircularProgress } from "@mui/material";
import { LanguageDispatcher } from "utils/types";
import { IntlProvider } from "react-intl";

const OverviewPageWrapper = styled.div`
  height: 100%;
  display: flex;
  gap: 1rem;
  height: 43rem;
  width: 100%;
  overflow-x: auto;
  padding-right: 20px;
  @media (min-width: 1920px) {
    gap: 2rem;
  }
  @media (max-width: 1420px) {
    gap: 1rem;
  }
`;

const CicularLoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const OverviewPageCards: React.FC = () => {
  const { country } = useOverviewContext();
  const { language } = useLanguageContext();
  const {
    data: values,
    mutate: getOveviewValue,
    isLoading,
  } = useMutation([GET_OVERVIEW_VALUES], getOverviewValues);
  useEffect(() => {
    getOveviewValue(country?.id || ECOWAS_DEFAULT_ID);
  }, [country, getOveviewValue]);

  return country ? (
    <OverviewPageWrapper>
      {isLoading ? (
        <CicularLoaderWrapper>
          <CircularProgress color="success" />
        </CicularLoaderWrapper>
      ) : (
        values?.map((value) => {
          const progressObject =
            value.progressMade > 0
              ? ProgressIconDispatcher[ProgressEnum.UP]
              : value.progressMade === 0
              ? ProgressIconDispatcher[ProgressEnum.NEUTRAL]
              : ProgressIconDispatcher[ProgressEnum.DOWN];
          return (
            <OverviewCard
              key={value.id}
              id={value.kpi.id}
              icon={IconDispatcher[value.kpi.id].icon}
              progressIcon={progressObject.icon}
              color={progressObject.color}
              title={value.kpi[LanguageDispatcher[language].label]}
              progress={value.progressMade}
              latestValue={value.latestValue}
              targetValue={value.targetLatestValue}
              baseLine={value.baseline}
              target2030={value.target2030}
            />
          );
        })
      )}
    </OverviewPageWrapper>
  ) : (
    <></>
  );
};

const OverviewPage: NextPage = () => {
  const { language } = useLanguageContext();
  return (
    <IntlProvider locale={language} messages={intlMessagesDispatcher[language]}>
      <Layout>
        <SideSection isContainer>
          <OverviewPageCards />
        </SideSection>
      </Layout>
    </IntlProvider>
  );
};

export default OverviewPage;
