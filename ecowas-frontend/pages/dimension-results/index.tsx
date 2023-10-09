import DimensionResultsCard from "components/Cards/DimensionResultsCard";
import Layout from "components/Layout";
import SideSection from "components/SideSection";
import { NextPage } from "next";
import { IntlProvider } from "react-intl";
import { intlMessagesDispatcher } from "utils/constants";
import { DimensionResultsProvider, useLanguageContext } from "utils/context";

const DimensionResults: NextPage = () => {
  const { language } = useLanguageContext();

  return (
    <IntlProvider locale={language} messages={intlMessagesDispatcher[language]}>
      <DimensionResultsProvider>
        <Layout>
          <SideSection isContainer>
            <DimensionResultsCard />
          </SideSection>
        </Layout>
      </DimensionResultsProvider>
    </IntlProvider>
  );
};

export default DimensionResults;
