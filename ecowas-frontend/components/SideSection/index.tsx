import {
  MetricSection,
  MetricSectionIcon,
  MetricSectionTitle,
  MetricSectionValue,
  MetricSectionWrap,
  MetricSectionWrapper,
  MetricSectionWrapperColor,
  ReverseColumn,
  SideSectionWrapper,
} from "./SideSection.style";
import TitleBar from "./TitleBar";
import HCDIcon from "public/assets/icons/small-integrated-hcd-index-icon.svg";
import HealthIcon from "public/assets/icons/small-icon-health.svg";
import EducationIcon from "public/assets/icons/small-education-icon.svg";
import EntrepreneurshipIcon from "public/assets/icons/small-entrepreneurship-icon.svg";
import { FormattedMessage } from "react-intl";
import { useQuery } from "react-query";
import {
  GET_OVERVIEW_VALUES,
  getOverviewValues,
} from "utils/api-requests/overview";
import { ECOWAS_DEFAULT_ID } from "utils/constants";
import styled from "@emotion/styled";
import { CircularProgress } from "@mui/material";

type SideSectionProps = {
  children?: any;
  sideMenu?: any;
  isContainer?: boolean;
};

const CicularLoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const SideSection: React.FC<SideSectionProps> = ({ isContainer, children }) => {
  const getKPIIndexes = async () => await getOverviewValues(ECOWAS_DEFAULT_ID);
  const { data, isLoading } = useQuery([GET_OVERVIEW_VALUES], getKPIIndexes);
  return !isLoading && data ? (
    <SideSectionWrapper isContainer={!!isContainer}>
      <TitleBar isContainer={!!isContainer} />
      <MetricSectionWrap>
        <MetricSectionWrapperColor isContainer={!!isContainer}>
          <MetricSectionWrapper isContainer={!!isContainer}>
            <MetricSection>
              <MetricSectionTitle>
                <MetricSectionIcon src={HCDIcon} alt={""} />
                <div>
                  <FormattedMessage id={"overview.integrated-hcd-index"} />
                </div>
              </MetricSectionTitle>
              <MetricSectionValue>
                {data.find((elm) => elm.kpi.id === 22)?.latestValue.toFixed(2)}
              </MetricSectionValue>
            </MetricSection>
            <MetricSection>
              <MetricSectionTitle>
                <MetricSectionIcon src={HealthIcon} alt={""} />
                <div>
                  <FormattedMessage id={"overview.health"} />
                </div>
              </MetricSectionTitle>
              <MetricSectionValue>
                {data.find((elm) => elm.kpi.id === 1)?.latestValue.toFixed(2)}
              </MetricSectionValue>
            </MetricSection>
            <MetricSection>
              <MetricSectionTitle>
                <MetricSectionIcon src={EducationIcon} alt={""} />
                <div>
                  <FormattedMessage id={"overview.education"} />
                </div>
              </MetricSectionTitle>
              <MetricSectionValue>
                {data.find((elm) => elm.kpi.id === 9)?.latestValue.toFixed(2)}
              </MetricSectionValue>
            </MetricSection>
            <MetricSection isLastOne>
              <MetricSectionTitle>
                <MetricSectionIcon src={EntrepreneurshipIcon} alt={""} />
                <div>
                  <FormattedMessage id={"overview.entrepreneurship"} />
                </div>
              </MetricSectionTitle>
              <MetricSectionValue>
                {data.find((elm) => elm.kpi.id === 18)?.latestValue.toFixed(2)}
              </MetricSectionValue>
            </MetricSection>
          </MetricSectionWrapper>
        </MetricSectionWrapperColor>
        {!!isContainer && (
          <ReverseColumn isContainer={!!isContainer}>{children}</ReverseColumn>
        )}
      </MetricSectionWrap>
    </SideSectionWrapper>
  ) : (
    <CicularLoaderWrapper>
      <CircularProgress color="success" />
    </CicularLoaderWrapper>
  );
};

export default SideSection;
