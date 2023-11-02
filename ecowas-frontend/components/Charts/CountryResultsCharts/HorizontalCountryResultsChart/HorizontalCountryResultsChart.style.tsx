import styled from "@emotion/styled";

type ChartWrapperProps = {
  isLong?: boolean;
};

export const ChartWrapper = styled.div<ChartWrapperProps>`
  padding-bottom: 0;
  width: ${({ isLong }) => (!isLong ? "6rem" : "43rem")};
  height: 4rem;
  display: flex;
  align-items: center;
`;

type ChartValueProps = {
  hasParent: boolean;
};

export const ChartValue = styled.div<ChartValueProps>`
  font-weight: bold;
  color: ${({ theme, hasParent }) =>
    hasParent ? theme.colors.success : theme.colors.primary};
  margin-left: -10px;
`;
