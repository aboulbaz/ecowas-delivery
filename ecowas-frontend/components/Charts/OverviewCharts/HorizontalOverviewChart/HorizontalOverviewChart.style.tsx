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

export const HorizontalOverviewChartText = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 0.8rem;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.success};
  margin-top: 8px;
  padding-bottom: 10px;
  border-bottom: 1px solid #d8d8d8;
`;
