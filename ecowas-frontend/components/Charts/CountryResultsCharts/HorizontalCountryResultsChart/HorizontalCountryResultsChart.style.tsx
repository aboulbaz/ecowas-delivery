import styled from "@emotion/styled";

type ChartWrapperProps = {
  isLong?: boolean;
};

export const ChartWrapper = styled.div<ChartWrapperProps>`
  padding-bottom: 0;
  width: ${({ isLong }) => !isLong ? '6rem' : '43rem'};
  height: 4rem;
  display: flex;
  align-items: center;
`;

export const ChartValue = styled.div`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.success};
  margin-left: -10px;
`;
