import HCDGenderIndexCard from "components/Cards/HCDGenderIndexCard";
import Layout from "components/Layout";
import { HCDMap } from "components/Maps";
import SideSection from "components/SideSection";
import { NextPage } from "next";
import { IntlProvider } from "react-intl";
import { intlMessagesDispatcher } from "utils/constants";
import { useLanguageContext } from "utils/context";
import {
  HCDGenderIndexProvider,
  useHCDGenderIndexContext,
} from "utils/context/HCDGenderIndexContext";

const HCDGenderIndexPage = () => {
  const { isDimensionView } = useHCDGenderIndexContext();

  return (
    <Layout>
      <SideSection isContainer>
        {/* {isDimensionView ? <HCDMap /> : <HCDGenderIndexCard />} */}
        <HCDGenderIndexCard />
      </SideSection>
    </Layout>
  );
};

const HCDGenderIndex: NextPage = () => {
  const { language } = useLanguageContext();
  return (
    <IntlProvider locale={language} messages={intlMessagesDispatcher[language]}>
      <HCDGenderIndexProvider>
        <HCDGenderIndexPage />
      </HCDGenderIndexProvider>
    </IntlProvider>
  );
};

export default HCDGenderIndex;
