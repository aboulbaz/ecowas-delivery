import styled from "@emotion/styled";

export const ChartWrapper = styled.div`
  padding: 1rem;
  padding-bottom: 0;
`;

export const ChartTargetValueWrapper = styled.div`
  text-align: center;
  margin-bottom: -70px;
  color: ${({ theme }) => theme.colors.primary};
  flex-shrink: 0;
`;

export const ChartTargetValueTitle = styled.div`
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
`;

export const ChartTargetValue = styled.div`
  font-size: 1.5rem;
  font-style: bold;
  font-weight: bolder;
`;

export const ChartBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 10rem;
  height: 18rem;
`;

export const BarWrapper = styled.div`
  width: 8.5rem;
`;

type ChartLabelProps = {
  isPrimary?: boolean;
  isValue?: boolean;
  value?: number;
};

export const ChartLabelWrapper = styled.div<ChartLabelProps>`
  padding-top: 5rem;
  padding-bottom: 1.5rem;
  margin-right: -21px;
  margin-left: -21px;
  /* @media (min-width: 1600px) {
  }
  @media (min-width: 1920px) {
  }
  @media (max-width: 1430px) {
    margin-left: -1rem;
  }
  @media (max-width: 1300) {
    margin-left: -1.5rem;
  } */
`;

export const ChartLabelsContainer = styled.div`
  position: relative;
  height: 100%;
  min-width: 3.7rem;
  display: flex;
  font-size: 8px;
  font-weight: 900;
  line-height: 120%;
`;

export const ChartLabelTitle = styled.div<ChartLabelProps>`
  position: absolute;
  bottom: ${({ value }) => (value ? `${value * 100}%` : "0%")};
  width: 100%;
  padding: 5px;
  padding-bottom: 0px;
`;

export const ChartLabelTitleText = styled.div<ChartLabelProps>`
  color: ${({ theme, isPrimary }) =>
    isPrimary ? theme.colors.primary : "#ADADAD"};
  border-bottom: 1px dashed
    ${({ theme, isPrimary }) => (isPrimary ? theme.colors.primary : "#ADADAD")};
  padding-bottom: 2px;
  align-items: center;
`;

export const ChartLabelValue = styled.div<ChartLabelProps>`
  color: ${({ theme, isPrimary }) =>
    isPrimary ? theme.colors.primary : "#ADADAD"};
  margin-bottom: -8px;
`;

export const ChartLabelYear = styled.div<ChartLabelProps>`
  color: ${({ theme, isPrimary }) =>
    isPrimary ? theme.colors.primary : "#ADADAD"};
`;

export const ChartValueWrapper = styled.div`
  padding-top: 5rem;
  padding-bottom: 1.5rem;
  margin-right: -21px;
  margin-left: -21px;
  /* @media (max-width: 1430px) {
    margin-right: -1rem;
  }
  @media (max-width: 1300) {
    margin-right: -1.5rem;
  }
  @media (max-width: 1250) {
    margin-right: -2rem;
  } */
`;

export const ChartValuesContainer = styled.div`
  position: relative;
  height: 100%;
  min-width: 4rem;
  display: flex;
  justify-content: end;
  flex-direction: column;
  text-align: left;
  font-size: 9px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  @media (max-width: 1300) {
    min-width: 2rem;
  }
`;

export const ChartValueTitle = styled.div<ChartLabelProps>`
  position: absolute;
  color: ${({ theme, isPrimary }) =>
    isPrimary ? theme.colors.primary : "#ADADAD"};
  bottom: ${({ value }) => (value ? `${value * 100}%` : "0%")};
  border-bottom: 1px dashed
    ${({ theme, isPrimary }) => (isPrimary ? theme.colors.primary : "#ADADAD")};
  padding: 5px;
  width: 100%;
`;
