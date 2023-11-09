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
  GET_GENDER_OVERVIEW_VALUES,
  GET_OVERVIEW_VALUES,
  getGenderOverviewValues,
  getOverviewValues,
} from "utils/api-requests/overview";
import {
  ECOWAS_DEFAULT_ID,
  IndexEnum,
  IndexEnumHCDGenderIndex,
  Routes,
} from "utils/constants";
import styled from "@emotion/styled";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import { useMemo } from "react";

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

const MinHeightPerPage: Record<Routes, number> = {
  [Routes.OVERVIEW]: 43.7,
  [Routes.DIMENSION_RESULTS]: 33,
  [Routes.COUNTRY_COMPARISON]: 41,
  [Routes.COUNTRY_RESULTS]: 34,
  [Routes.HCD_GENDER_INDEX]: 34,
  [Routes.HCD_GENDER_INDEX_DEEP_DIVE]: 36,
  [Routes.METHODOLOGY]: 0,
};

const SideSection: React.FC<SideSectionProps> = ({ isContainer, children }) => {
  const router = useRouter();
  const isGenderIndex = useMemo(() => {
    return (
      router.pathname === Routes.HCD_GENDER_INDEX ||
      router.pathname === Routes.HCD_GENDER_INDEX_DEEP_DIVE
    );
  }, [router.pathname]);
  const getKPIIndexes = async () =>
    !isGenderIndex
      ? await getOverviewValues(ECOWAS_DEFAULT_ID)
      : getGenderOverviewValues(ECOWAS_DEFAULT_ID);
  const { data, isLoading } = useQuery(
    [isGenderIndex ? GET_OVERVIEW_VALUES : GET_GENDER_OVERVIEW_VALUES],
    getKPIIndexes
  );
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
                {data
                  .find((elm) =>
                    isGenderIndex
                      ? elm.kpi.id ===
                        IndexEnumHCDGenderIndex.HCD_INTEGRATED_INDEX
                      : elm.kpi.id === IndexEnum.HCD_INTEGRATED_INDEX
                  )
                  ?.latestValue.toFixed(2)}
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
                {data
                  .find((elm) =>
                    isGenderIndex
                      ? elm.kpi.id === IndexEnumHCDGenderIndex.HEALTH
                      : elm.kpi.id === IndexEnum.HEALTH
                  )
                  ?.latestValue.toFixed(2)}
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
                {data
                  .find((elm) =>
                    isGenderIndex
                      ? elm.kpi.id === IndexEnumHCDGenderIndex.EDUCATION
                      : elm.kpi.id === IndexEnum.EDUCATION
                  )
                  ?.latestValue.toFixed(2)}
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
                {data
                  .find((elm) =>
                    isGenderIndex
                      ? elm.kpi.id === IndexEnumHCDGenderIndex.ENTREPRENEURSHIP
                      : elm.kpi.id === IndexEnum.ENTREPRENEURSHIP
                  )
                  ?.latestValue.toFixed(2)}
              </MetricSectionValue>
            </MetricSection>
          </MetricSectionWrapper>
        </MetricSectionWrapperColor>
        {!!isContainer && (
          <ReverseColumn
            isContainer={!!isContainer}
            minHeight={MinHeightPerPage[router.pathname]}
          >
            {children}
          </ReverseColumn>
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
