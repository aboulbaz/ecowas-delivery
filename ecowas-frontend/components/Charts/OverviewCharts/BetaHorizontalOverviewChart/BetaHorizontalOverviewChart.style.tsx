import styled from "@emotion/styled";

export const HorizontalOverviewChartWrapper = styled.div`
  padding: 0;
  width: 14rem;
  border-radius: 25px;
  background-color: rgba(24, 197, 127, 0.3);
  height: 1rem;
  text-align: center;
  margin-bottom: 2.4rem;
  /* @media (max-width: 1430px) {
    min-width: 13rem;
  } */
  @media (max-width: 1270px) {
    width: 13rem;
  }
`;

export const HorizontalOverviewChartText = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 0.7rem;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.success};
  margin-top: 8px;
  padding-bottom: 10px;
  width: 4.5rem;
  text-align: center;
  margin-left: -20px;
`;

type HorizontalOverviewChartBarProps = {
  percentage: number;
};

export const HorizontalOverviewChartBarContainer = styled.div`
  padding: 0;
  display: flex;
  height: 100%;
  border-radius: inherit;
  text-align: center;
`;

export const HorizontalOverviewChartBarWrapper = styled.div<HorizontalOverviewChartBarProps>`
  height: 100%;
  width: ${({ percentage }) => `${percentage}%`};
  background-color: ${({ theme }) => theme.colors.success};
  border-radius: inherit;
  text-align: right;
  padding: 0;
`;

type HorizontalOverviewChartBarTargetValueProps = {
  value: number;
  targetValue: number;
};

export const HorizontalOverviewChartBarTargetValueWrapper = styled.div<HorizontalOverviewChartBarTargetValueProps>`
  height: 100%;
  margin-left: ${({ value, targetValue }) => `${targetValue - value}%`};
  width: 3rem;
`;

export const HorizontalOverviewChartBarTargetValue = styled.div`
  height: 100%;
  width: 1rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  padding: 0;
`;
