import styled from "@emotion/styled";
import Header from "components/Header";
import { useLanguageContext } from "utils/context";

const AppContentWrapper = styled.div`
  display: flex;
  gap: 0.7rem;
  overflow-x: auto;
  @media (min-width: 1600px) {
    gap: 4rem;
  }
  @media (min-width: 1920px) {
    gap: 7rem;
  }
  @media (max-width: 1430px) {
    gap: 10px;
  }
  @media (max-width: 1400px) {
    gap: 1rem;
    justify-content: space-between;
  }
`;

interface LayoutProps {
  children: any;
}

const LayoutRoot: React.FC<LayoutProps> = ({ children }) => {
  const { language } = useLanguageContext();
  return (
    <>
      <Header />
      <AppContentWrapper>{children}</AppContentWrapper>
    </>
  );
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <LayoutRoot>{children}</LayoutRoot>;
};

export default Layout;
