import styled from "@emotion/styled";
import React, { useState } from "react";
import { IndexEnumHCDGenderIndex } from "utils/constants";
import { useHCDGenderIndexContext } from "utils/context/HCDGenderIndexContext";
import HCDGenderIndexToggle from "./HCDGenderIndexToggle";
import { FormattedMessage } from "react-intl";

type Props = {
  isDimensionView: boolean;
};

const HCDGenderIndexnavBarWrapper = styled.div<Props>`
  display: flex;
  flex-direction: ${({ isDimensionView }) =>
    !isDimensionView ? "row-reverse" : "row"};
  justify-content: space-between;
  width: 100%;
`;

const HCDGenderIndexnavBarTabs = styled.div`
  display: flex;
`;

type HCDGenderIndexnavBarSingleTabProps = {
  isClicked?: boolean;
};

const HCDGenderIndexnavBarSingleTab = styled.div<HCDGenderIndexnavBarSingleTabProps>`
  text-align: center;
  font-size: 11px;
  font-style: normal;
  font-weight: ${({ isClicked }) => (isClicked ? "800" : "400")};
  padding: 0.5rem;
  border-radius: 8px;
  line-height: 120%;
  color: white;
  border: ${({ isClicked, theme }) =>
    isClicked ? `2px solid ${theme.colors.white}` : "none"};
  height: 3.2rem;
  width: 13rem;
  overflow: hidden;
  cursor: pointer;
`;

const HCDGenderIndexnavBar: React.FC = () => {
  const { index, updateIndex, isDimensionView } = useHCDGenderIndexContext();

  return (
    <HCDGenderIndexnavBarWrapper isDimensionView={isDimensionView}>
      {/* {isDimensionView && (
        <HCDGenderIndexnavBarTabs>
          <HCDGenderIndexnavBarSingleTab
            isClicked={index === IndexEnumHCDGenderIndex.HCD_INTEGRATED_INDEX}
            onClick={() =>
              updateIndex(IndexEnumHCDGenderIndex.HCD_INTEGRATED_INDEX)
            }
          >
            <FormattedMessage id={"overview.integrated-hcd-index"} />
          </HCDGenderIndexnavBarSingleTab>
          <HCDGenderIndexnavBarSingleTab
            isClicked={index === IndexEnumHCDGenderIndex.HEALTH}
            onClick={() => updateIndex(IndexEnumHCDGenderIndex.HEALTH)}
          >
            <FormattedMessage id={"overview.health"} />
          </HCDGenderIndexnavBarSingleTab>
          <HCDGenderIndexnavBarSingleTab
            isClicked={index === IndexEnumHCDGenderIndex.EDUCATION}
            onClick={() => updateIndex(IndexEnumHCDGenderIndex.EDUCATION)}
          >
            <FormattedMessage id={"overview.education"} />
          </HCDGenderIndexnavBarSingleTab>
          <HCDGenderIndexnavBarSingleTab
            isClicked={index === IndexEnumHCDGenderIndex.ENTREPRENEURSHIP}
            onClick={() =>
              updateIndex(IndexEnumHCDGenderIndex.ENTREPRENEURSHIP)
            }
          >
            <FormattedMessage id={"overview.entrepreneurship"} />
          </HCDGenderIndexnavBarSingleTab>
        </HCDGenderIndexnavBarTabs>
      )} */}
      {/* <HCDGenderIndexToggle /> */}
    </HCDGenderIndexnavBarWrapper>
  );
};

export default HCDGenderIndexnavBar;
