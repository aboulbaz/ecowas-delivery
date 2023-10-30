import styled from "@emotion/styled";

export const HCDGenderIndexCardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: 1rem 0.9rem;
`;

export const HCDGenderIndexTableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const HCDGenderIndexTableHead = styled.thead`
  height: 5rem;
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.black};
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 800;
  line-height: 120%;
`;

export const HCDGenderIndexTableRow = styled.tr`
  font-size: 16px;
  font-style: bold;
  font-weight: 400;
  line-height: 120%;
`;

export const HCDGenderIndexTableCell = styled.td`
  padding: 5px;
  font-size: 10px;
  width: 5px;
  border-bottom: 1px solid #ddd;
`;

type ValuedHCDGenderIndexTableCellProps = {
  color: string;
};

export const ValuedHCDGenderIndexTableCell = styled.td<ValuedHCDGenderIndexTableCellProps>`
  padding: 5px;
  font-size: 10px;
  width: 5px;
  background: ${({ color }) => color};
  border: 2px solid white;
  position: relative;
  text-align: center;
  font-weight: bolder;
  color: white;
`;

export const HCDGenderIndexTableCellWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

type HCDGenderIndexTableCellTitleProps = {
  isLong?: boolean;
};

export const HCDGenderIndexTableCellTitle = styled.div<HCDGenderIndexTableCellTitleProps>`
  min-width: ${({ isLong }) => (!isLong ? "3.9rem" : "43rem")};
  line-height: 1.5;
  word-wrap: break-word;
  padding: 0 0.5rem 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HCDGenderIndexRankTag = styled.div`
  padding: 0.1rem 0.8rem;
  background: #ececec;
  border-radius: 25px;
  /* width: 2rem; */
`;

export const MapMetricWrapper = styled.div`
  width: 6rem;
`;

export const MapMetric = styled.div`
  padding: 0.3rem;
  width: 0.2rem;
  height: 2rem;
  background: linear-gradient(180deg, #00834f 0%, #e0824e 100%);
`;

export const MapMetricTitle = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 800;
  line-height: 120%;
  padding: 0;
`;

export const MapMetricLabel = styled.p`
  font-size: 9px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
`;
