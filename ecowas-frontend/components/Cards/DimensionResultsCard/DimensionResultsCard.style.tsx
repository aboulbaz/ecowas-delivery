import styled from "@emotion/styled";
import Image from "next/image";

export const DimensionResultsCardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0.7rem 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
`;

export const DimensionResultsCardContainer = styled.div`
  padding-right: 3rem;
  display: flex;
  border-radius: 5px;
  margin-bottom: 1rem;
  width: 100%;
`;

export const DimensionResultHr = styled.hr`
  border: 1px solid #d8d8d8;
  width: 95%;
`;

export const DimensionResultsCardTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  width: 8rem;
`;

export const DimensionResultsCardTitle = styled.div`
  font-weight: 800;
  color: ${({ theme }) => theme.colors.black};
  font-size: 0.8rem;
  line-height: 120%;
  margin-bottom: 5px;
`;

export const DimensionResultsCardSubTitle = styled.div`
  font-weight: 300;
  color: ${({ theme }) => theme.colors.grey};
  font-size: 0.7rem;
  line-height: 120%;
`;

export const DimensionResultsCardProgressCardWrapper = styled.div`
  margin-left: 3rem;
  flex-grow: 1;
`;

export const DimensionResultsCardProgressWrapper = styled.div`
  margin-top: 1rem;
  border-bottom: 1px solid #d8d8d8;
  padding: 0.7rem 0;
  display: flex;
  justify-content: space-between;
  font-style: normal;
  font-weight: 400;
  font-size: 0.7em;
  line-height: 120%;
  margin-bottom: 1.5rem;
`;

export const DimensionResultsCardProgressTitle = styled.div`
  width: 5rem;
`;

type Props = {
  color: string;
};

export const DimensionResultsCardProgressValue = styled.div<Props>`
  display: flex;
  font-style: normal;
  font-weight: 800;
  font-size: 1rem;
  line-height: 120%;
  gap: 0.5rem;
  color: ${({ color }) => color};
`;

export const DimensionResultsProgressIcon = styled(Image)`
  width: 1.2rem;
  height: 1.2rem;
`;
