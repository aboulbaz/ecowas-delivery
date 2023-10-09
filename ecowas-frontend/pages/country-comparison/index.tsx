import { NextPage } from "next";
import Layout from "components/Layout";
import { CountryComparisonMap } from "components/Maps";
import SideSection from "components/SideSection";
import {
  CountryComparisonProvider,
  useCountryComparisonContext,
} from "utils/context/CountryComparisonContext";
import CountryComparisonToggle from "components/SideSection/SectionNavBars/CountryComparisonToggle";
import {
  ContainedCountryComparisonCard,
  CountryComparisonCard,
} from "components/Cards/CountryComparisonCard";
import styled from "@emotion/styled";
import { useMutation } from "react-query";
import {
  GET_COUNTRY_COMPARISON,
  getCountryComparison,
} from "utils/api-requests/country-comparison";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { IntlProvider } from "react-intl";
import { intlMessagesDispatcher } from "utils/constants";
import { useLanguageContext } from "utils/context";

const CountryComparisonMapWrapper = styled.div``;

const CicularLoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const CountryComparisonPage: React.FC = () => {
  const { isDimensionView, index } = useCountryComparisonContext();

  const {
    data: kpiValues,
    mutate: getCountryComparisonHandler,
    isLoading,
  } = useMutation([GET_COUNTRY_COMPARISON], getCountryComparison);

  useEffect(() => {
    getCountryComparisonHandler({
      kpi: index,
    });
  }, [index, getCountryComparisonHandler]);

  return isDimensionView ? (
    <Layout>
      <SideSection isContainer>
        <CountryComparisonMapWrapper>
          <CountryComparisonMap />
          {isLoading ? (
            <CicularLoaderWrapper>
              <CircularProgress color="success" />
            </CicularLoaderWrapper>
          ) : (
            <CountryComparisonCard data={kpiValues || []} />
          )}
        </CountryComparisonMapWrapper>
      </SideSection>
    </Layout>
  ) : (
    <Layout>
      <SideSection isContainer>
        {isLoading ? (
          <CicularLoaderWrapper>
            <CircularProgress color="success" />
          </CicularLoaderWrapper>
        ) : (
          <ContainedCountryComparisonCard data={kpiValues || []} />
        )}
      </SideSection>
    </Layout>
  );
};

const CountryComparison: NextPage = () => {
  const { language } = useLanguageContext();
  return (
    <IntlProvider locale={language} messages={intlMessagesDispatcher[language]}>
      <CountryComparisonProvider>
        <CountryComparisonPage />
      </CountryComparisonProvider>
    </IntlProvider>
  );
};

export default CountryComparison;
