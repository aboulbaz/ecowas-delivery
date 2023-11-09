import styled from "@emotion/styled";
import { Button, ButtonBase } from "@mui/material";
import Image from "next/image";

type SideSectionWrapperProps = {
  isContainer: boolean;
  minHeight?: number
};

export const SideSectionWrapper = styled.div<SideSectionWrapperProps>`
  width: ${({ isContainer }) => (isContainer ? "97%" : "20rem")};
  /* height: 100%; */
  @media (max-width: 1650px) {
    width: ${({ isContainer }) => (isContainer ? "97%" : "16rem")};
  }
  @media (max-width: 1400px) {
    width: ${({ isContainer }) => (isContainer ? "97%" : "14.8rem")};
  }
  @media (max-width: 1184px) {
    gap: 12rem;
  }
`;

export const TitleBarWrapper = styled.div<SideSectionWrapperProps>`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 3.8rem;
  border-top-right-radius: 1.5rem;
  padding: 10px 40px;
  display: flex;
  gap: 3rem;
  width: ${({ isContainer }) => (isContainer ? "100%" : "16rem")};
  @media (max-width: 1400px) {
    width: ${({ isContainer }) => (isContainer ? "100%" : "14.8rem")};
  }
`;

export const TitleBarPage = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-style: normal;
  font-weight: 800;
  line-height: 120%;
  margin: 0;
  margin-bottom: 4px;
  min-width: 10rem;
  @media (max-width: 1920px) {
    font-size: 0.9rem;
  }
  @media (max-width: 1650px) {
    font-size: 0.8rem;
  }
  @media (max-width: 1184px) {
    font-size: 0.7rem;
  }
`;

export const TitleBarSub = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-style: normal;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 120%;
  margin: 0;
  @media (max-width: 1920px) {
    font-size: 0.7rem;
  }
  @media (max-width: 1650px) {
    font-size: 0.67rem;
  }
  @media (max-width: 1184px) {
    font-size: 0.5rem;
  }
`;

export const MetricSectionWrapperColor = styled.div<SideSectionWrapperProps>`
  background-color: ${({ theme }) => theme.colors.primary};
  width: ${({ isContainer }) => (isContainer ? "100%" : "16rem")};
  height: 25px;
  @media (max-width: 1400px) {
    width: ${({ isContainer }) => (isContainer ? "100%" : "14.8rem")};
  }
`;

export const MetricSectionWrapper = styled.div<SideSectionWrapperProps>`
  background-color: ${({ theme }) => theme.colors.white};
  width: 13rem;
  border-radius: 10px;
  padding: 26px 23px;
  margin-left: 48px;
  @media (max-width: 1400px) {
    margin-left: 30px;
  }
`;

type MetricSectionProps = {
  isLastOne?: boolean;
};

export const MetricSection = styled.div<MetricSectionProps>`
  background-color: #dedede;
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: ${({ isLastOne }) => (isLastOne ? "0" : "1rem")};
`;

export const MetricSectionIcon = styled(Image)`
  width: 1.4rem;
  height: 1.4rem;
  margin-bottom: 3rem;
`;

export const MetricSectionTitle = styled.div`
  display: flex;
  gap: 0.7rem;
  font-style: normal;
  font-weight: 700;
  font-size: 0.65rem;
  line-height: 120%;
  height: 2.5rem;
`;

export const MetricSectionValue = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 2rem;
  line-height: 120%;
  display: flex;
  flex-direction: row-reverse;
`;

export const SideSectionChildrenWrapper = styled.div`
  margin-top: 1.5rem;
`;

export const ReverseColumn = styled.div<SideSectionWrapperProps>`
  margin-left: 17.5rem;
  height: ${({ isContainer, minHeight=43.7 }) => (isContainer ? `${minHeight}rem` : "100px")};
  margin-top: 14px;
  overflow-y: ${({ isContainer }) => (isContainer ? "auto" : undefined)};
`;

type SectionDropdownWrapperProps = {
  shouldBeEnd?: boolean;
};

export const SectionDropdownWrapper = styled.div<SectionDropdownWrapperProps>`
  display: flex;
  gap: 10px;
  width: 100%;
  padding-left: 1rem;
  @media (max-width: 1400px) {
    padding-left: 1rem;
  }
  @media (max-width: 1300px) {
    padding-left: 0rem;
  }
`;

export const MetricSectionWrap = styled.div``;
