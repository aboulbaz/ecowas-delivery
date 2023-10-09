import styled from "@emotion/styled";

export const HorizontalOverviewChartWrapper = styled.div`
  padding: 0;
  width: 14rem;
  border-radius: 25px;
  background-color: rgba(24, 197, 127, 0.3);
  height: 1rem;
  text-align: center;
  margin-bottom: 2.4rem;
`;

export const HorizontalOverviewChartText = styled.div<HorizontalOverviewChartBarProps>`
  font-style: normal;
  font-weight: 800;
  font-size: 0.8rem;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: 18px;
  padding-bottom: 10px;
  position: absolute;
  left: ${({ percentage }) => `${percentage}%`};
`;

type HorizontalOverviewChartBarProps = {
  percentage: number;
};

export const HorizontalOverviewChartBarContainer = styled.div`
  padding: 0;
  display: flex;
  height: 100%;
  border-radius: inherit;
  position: relative;
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
  width: 3rem;
  position: absolute;
`;

export const HorizontalOverviewChartBarTargetValue = styled.div<HorizontalOverviewChartBarProps>`
  height: 1rem;
  width: 1rem;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  padding: 0;
  left: ${({ percentage }) => `${percentage}%`};
`;
