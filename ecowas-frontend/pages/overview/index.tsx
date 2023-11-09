import { NextPage } from "next";
import styled from "@emotion/styled";
import Layout from "components/Layout";
import { OverviewCard } from "components/Cards";
import SideSection from "components/SideSection";
import { useLanguageContext, useOverviewContext } from "utils/context";
import { useEffect } from "react";
import { useMutation } from "react-query";
import {
  GET_OVERVIEW_VALUES,
  IconDispatcher,
  getOverviewValues,
} from "utils/api-requests/overview";
import {
  ECOWAS_DEFAULT_ID,
  IndexEnum,
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
  min-height: 43.7rem;
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

  const progressIconHandler = (progressMade) => {
    return progressMade > 0
      ? ProgressIconDispatcher[ProgressEnum.UP]
      : progressMade === 0
      ? ProgressIconDispatcher[ProgressEnum.NEUTRAL]
      : ProgressIconDispatcher[ProgressEnum.DOWN];
  };

  const HCDValue = values?.find(
    (val) => val.kpi.id === IndexEnum.HCD_INTEGRATED_INDEX
  );
  const HealtValue = values?.find((val) => val.kpi.id === IndexEnum.HEALTH);
  const EducationValue = values?.find(
    (val) => val.kpi.id === IndexEnum.EDUCATION
  );
  const EntrepreneurshipValue = values?.find(
    (val) => val.kpi.id === IndexEnum.ENTREPRENEURSHIP
  );

  return country ? (
    <OverviewPageWrapper>
      {isLoading ? (
        <CicularLoaderWrapper>
          <CircularProgress color="success" />
        </CicularLoaderWrapper>
      ) : (
        <>
          {HCDValue && (
            <OverviewCard
              key={HCDValue.id}
              icon={IconDispatcher[HCDValue.kpi.id].icon}
              progressIcon={progressIconHandler(HCDValue.progressMade).icon}
              color={progressIconHandler(HCDValue.progressMade).color}
              title={HCDValue.kpi[LanguageDispatcher[language].label]}
              progress={HCDValue.progressMade}
              latestValue={HCDValue.latestValue}
              targetValue={HCDValue.targetLatestValue}
              baseLine={HCDValue.baseline}
              target2030={HCDValue.target2030}
              latestValueHcdGenderIndex={HCDValue.associatedKpi?.latestValue}
            />
          )}
          {HealtValue && (
            <OverviewCard
              key={HealtValue.id}
              icon={IconDispatcher[HealtValue.kpi.id].icon}
              progressIcon={progressIconHandler(HealtValue.progressMade).icon}
              color={progressIconHandler(HealtValue.progressMade).color}
              title={HealtValue.kpi[LanguageDispatcher[language].label]}
              progress={HealtValue.progressMade}
              latestValue={HealtValue.latestValue}
              targetValue={HealtValue.targetLatestValue}
              baseLine={HealtValue.baseline}
              target2030={HealtValue.target2030}
              latestValueHcdGenderIndex={HealtValue.associatedKpi?.latestValue}
            />
          )}
          {EducationValue && (
            <OverviewCard
              key={EducationValue.id}
              icon={IconDispatcher[EducationValue.kpi.id].icon}
              progressIcon={
                progressIconHandler(EducationValue.progressMade).icon
              }
              color={progressIconHandler(EducationValue.progressMade).color}
              title={EducationValue.kpi[LanguageDispatcher[language].label]}
              progress={EducationValue.progressMade}
              latestValue={EducationValue.latestValue}
              targetValue={EducationValue.targetLatestValue}
              baseLine={EducationValue.baseline}
              target2030={EducationValue.target2030}
              latestValueHcdGenderIndex={
                EducationValue.associatedKpi?.latestValue
              }
            />
          )}
          {EntrepreneurshipValue && (
            <OverviewCard
              key={EntrepreneurshipValue.id}
              icon={IconDispatcher[EntrepreneurshipValue.kpi.id].icon}
              progressIcon={
                progressIconHandler(EntrepreneurshipValue.progressMade).icon
              }
              color={
                progressIconHandler(EntrepreneurshipValue.progressMade).color
              }
              title={
                EntrepreneurshipValue.kpi[LanguageDispatcher[language].label]
              }
              progress={EntrepreneurshipValue.progressMade}
              latestValue={EntrepreneurshipValue.latestValue}
              targetValue={EntrepreneurshipValue.targetLatestValue}
              baseLine={EntrepreneurshipValue.baseline}
              target2030={EntrepreneurshipValue.target2030}
              latestValueHcdGenderIndex={
                EntrepreneurshipValue.associatedKpi?.latestValue
              }
            />
          )}
        </>
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
