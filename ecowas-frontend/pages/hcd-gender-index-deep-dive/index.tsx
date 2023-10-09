import Layout from "components/Layout";
import { HCDDeepDiveMap } from "components/Maps";
import SideSection from "components/SideSection";
import { NextPage } from "next";
import { IntlProvider } from "react-intl";
import { intlMessagesDispatcher } from "utils/constants";
import { useLanguageContext } from "utils/context";
import { HCDGenderIndexDeepDiveProvider } from "utils/context/HCDGenderIndexDeepDiveContext";

const HCDGenderIndexDeepDive: NextPage = () => {
  const { language } = useLanguageContext();

  return (
    <IntlProvider locale={language} messages={intlMessagesDispatcher[language]}>
      <HCDGenderIndexDeepDiveProvider>
        <Layout>
          <SideSection isContainer>
            <HCDDeepDiveMap />
          </SideSection>
        </Layout>
      </HCDGenderIndexDeepDiveProvider>
    </IntlProvider>
  );
};

export default HCDGenderIndexDeepDive;
