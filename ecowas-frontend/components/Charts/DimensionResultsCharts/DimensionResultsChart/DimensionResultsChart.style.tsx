import styled from "@emotion/styled";

export const ChartWrapper = styled.div`
  padding: 1rem;
  padding-bottom: 0;
  width: 60%;
  height: 9rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const DimensionResultsChartIndicatorWrapper = styled.div`
  display: flex;
  position: relative;
  width: 95%; // CHECK HERE
  margin-top: -1rem;
`;

type DimensionResultsChartIndicatorProps = {
  value: number;
  color: string;
};

export const DimensionResultsChartValueWrapper = styled.div<DimensionResultsChartIndicatorProps>`
  position: absolute;
  left: ${({ value }) => `${value}%`};
  color: ${({ color }) => color};
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  /* max-width: 5rem; */
  margin-bottom: -1rem;
  display: flex;
  height: 1.5rem;
`;

type DimensionResultsChartColorProps = {
  color: string;
};

export const DimensionResultsChartIndicator = styled.div<DimensionResultsChartColorProps>`
  border-right: ${({ color }) => `2px dotted ${color}`};
  padding-right: 5px;
`;

export const DimensionResultsChartTitle = styled.div`
  padding-left: 5px;
  min-width: 6rem;
  padding-bottom: 5px;
`;
