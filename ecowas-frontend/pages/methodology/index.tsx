import Layout from "components/Layout";
import MethodologyComponent from "components/MethodologyComponent";
import SideSection from "components/SideSection";
import { NextPage } from "next";
import { IntlProvider } from "react-intl";
import { intlMessagesDispatcher } from "utils/constants";
import { useLanguageContext } from "utils/context";

const Methodology: NextPage = () => {
  const { language } = useLanguageContext();

  return (
    <IntlProvider locale={language} messages={intlMessagesDispatcher[language]}>
      <Layout>
        <SideSection />
        <MethodologyComponent />
      </Layout>
    </IntlProvider>
  );
};

export default Methodology;
