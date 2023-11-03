import styled from "@emotion/styled";

export const CountryResultsCardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: 1rem 0.9rem;

`;

export const CountryResultsTableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const CountryResultsTbody = styled.tbody`
  overflow-y: scroll;
`;

export const CountryResultsTableHead = styled.thead`
  height: 5rem;
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.black};
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 800;
  line-height: 120%;
`;

export const CountryResultsTableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f5f4f4;
  }
`;

export const CountryResultsTableCell = styled.td`
  padding: 8px;
  font-size: 10px;
  @media (max-width: 1400px) {
    font-size: 8px;
  }
`;

export const CountryResultsTableCellWrapper = styled.div`
  display: flex;
  gap: 3px;
`;

type CountryResultsTableCellTitleProps = {
  isLong?: boolean;
};

export const CountryResultsTableCellTitle = styled.div<CountryResultsTableCellTitleProps>`
  min-width: ${({ isLong }) => (!isLong ? "3.9rem" : "43rem")};
  max-width: ${({ isLong }) => (!isLong ? "3.9rem" : "43rem")};
  line-height: 1.5;
  word-wrap: break-word;
  padding: 0 0.5rem 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1400px) {
    min-width: 3rem;
  }
`;

export const CountryResultsTableCellChart = styled.div<CountryResultsTableCellTitleProps>`
  min-width: ${({ isLong }) => (!isLong ? "6rem" : "43rem")};
  max-width: ${({ isLong }) => (!isLong ? "6rem" : "43rem")};
  line-height: 1.5;
  word-wrap: break-word;
  padding: 0 0.5rem 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const CountryResultsRankTag = styled.div`
  padding: 0.1rem 0.8rem;
  background: #ececec;
  border-radius: 25px;
  /* width: 2rem; */
`;
