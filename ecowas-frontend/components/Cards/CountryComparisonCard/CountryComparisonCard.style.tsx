import styled from "@emotion/styled";

type CountryComparisonCardWrapperProps = {
  isContained?: boolean;
};

export const CountryComparisonCardWrapper = styled.div<CountryComparisonCardWrapperProps>`
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  margin-left: ${({ isContained }) => (isContained ? undefined : "2rem")};
  @media (max-width: 1400px) {
    margin-left: 1.5rem;
  }
`;

export const CountryComparisonCardIndicatorsWrapper = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
`;

export const CountryComparisonCardIndicators = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SingleCountryComparisonCardIndicator = styled.div`
  display: flex;
  gap: 3px;
  font-size: 0.7rem;
  align-items: center;
`;

type SingleCountryComparisonCardIconProps = {
  color: string;
};

export const SingleCountryComparisonCardIcon = styled.div<SingleCountryComparisonCardIconProps>`
  background-color: ${({ color }) => color};
  border-radius: 50%;
  width: 0.6rem;
  height: 0.6rem;
  margin: 0;
`;

export const SingleCountryComparisonCardTitle = styled.div`
  margin: 0;
  padding: 0;
`;

export const CountryComparisonChartsWrapper = styled.div`
  margin-top: 1rem;
`;

interface CountryComparisonChartBarProps {
  isClicked?: boolean;
  isContained?: boolean;
}

export const CountryComparisonChart = styled.div<CountryComparisonChartBarProps>`
  display: flex;
  gap: 10px;
  align-items: center;
  /* height: 1.43rem; */
  height: ${({ isContained }) => (!isContained ? "1.3rem" : "1.8rem")};
`;

export const CountryComparisonChartBar = styled.div<CountryComparisonChartBarProps>`
  display: flex;
  align-items: center;
  height: ${({ isContained }) => (!isContained ? "1rem" : "1.5rem")};
  flex-shrink: 0;
  border-radius: 38px;
  background: ${({ isClicked }) => (isClicked ? "#d1f3e5" : "#ECECEC")};
  width: calc(100% - 5.5rem);
  position: relative;
  font-weight: bolder;
`;

type CountryComparisonChartTitleProps = {
  isPrimary?: boolean;
};

export const CountryComparisonChartTitle = styled.div<CountryComparisonChartTitleProps>`
  min-width: 5rem;
  max-width: 5rem;
  font-size: 0.7rem;
  font-weight: bolder;
  letter-spacing: 0.5px;
  color: ${({ theme, isPrimary }) =>
    isPrimary ? theme.colors.secondary : theme.colors.black};
`;

interface CountryComparisonChartBallProps
  extends CountryComparisonChartBarProps {
  color: string;
  hoverColor: string;
  value?: number;
}

export const CountryComparisonChartBall = styled.div<CountryComparisonChartBallProps>`
  margin: 0;
  height: ${({ isContained }) => (!isContained ? "1rem" : "1.5rem")};
  width: ${({ isContained }) => (!isContained ? "1rem" : "1.5rem")};
  border-radius: 50%;
  background-color: ${({ color, hoverColor, isClicked }) =>
    isClicked ? color : hoverColor};
  position: absolute;
  left: ${({ value }) => `${value}%`};
`;

export const CountryComparisonChartBallWrapper = styled.div<CountryComparisonChartBallProps>`
  margin: 0;
  padding: 0;
  height: ${({ isContained }) => (!isContained ? "1rem" : "1.5rem")};
  border-radius: 50%;
  background-color: ${({ color, hoverColor, isClicked }) =>
    isClicked ? color : hoverColor};
`;

export const CountryComparisonChartAxeWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 10px;
  justify-content: space-between;
`;

export const CountryComparisonChartAxeIndex = styled.div`
  font-size: 0.9rem;
`;
