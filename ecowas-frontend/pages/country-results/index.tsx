import CountryResultsCard from "components/Cards/CountryResultsCard";
import Layout from "components/Layout";
import SideSection from "components/SideSection";
import { NextPage } from "next";
import { IntlProvider } from "react-intl";
import { intlMessagesDispatcher } from "utils/constants";
import { CountryResultsProvider, useLanguageContext } from "utils/context";

const CountryResults: NextPage = () => {
  const { language } = useLanguageContext();

  return (
    <IntlProvider locale={language} messages={intlMessagesDispatcher[language]}>
      <CountryResultsProvider>
        <Layout>
          <SideSection isContainer>
            <CountryResultsCard />
          </SideSection>
        </Layout>
      </CountryResultsProvider>
    </IntlProvider>
  );
};

export default CountryResults;
