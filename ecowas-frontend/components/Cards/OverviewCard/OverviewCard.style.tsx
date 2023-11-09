import styled from "@emotion/styled";
import Image from "next/image";

export const OverviewCardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 16.5rem;
  height: 42rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  @media (min-width: 1920px) {
    width: 16.5rem;
  }
  @media (max-width: 1430px) {
    width: 14.5rem;
  }
  @media (max-width: 1280px) {
    width: 13.5rem;
  }
`;

export const OverviewCardIconWrapper = styled.div`
  text-align: center;
  font-style: normal;
  font-weight: 800;
  font-size: 0.9rem;
  line-height: 120%;
  margin-bottom: 1rem;
  min-height: 7.7rem;
`;

export const OverviewCardTitleWrapper = styled.div`
  min-width: 9rem;
`;

export const OverviewCardIcon = styled(Image)`
  width: 5rem;
  height: 5rem;
`;

export const OvervireCardProgressWrapper = styled.div`
  margin-top: 1rem;
  border-top: 2px solid #d8d8d8;
  border-bottom: 2px solid #d8d8d8;
  padding: 0.7rem 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-style: normal;
  font-weight: 400;
  font-size: 0.7em;
  line-height: 120%;
`;

type Props = {
  color: string;
};

export const OvervireCardProgressValue = styled.div<Props>`
  display: flex;
  font-style: normal;
  font-weight: 800;
  font-size: 1rem;
  line-height: 120%;
  gap: 0.4rem;
  color: ${({ color }) => color};
`;

export const OvervireCardProgressIcon = styled(Image)`
  width: 1.2rem;
  height: 1.2rem;
`;

export const HCDGenderIndexWrapper = styled.div`
  min-width: 14rem;
  margin-top: 0.9rem;
  @media (max-width: 1430px) {
    min-width: 13rem;
  }
  @media (max-width: 1280px) {
    min-width: 12.5rem;
  }
`;

export const HCDGenderIndexTitleLabel = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 120%;
`;

export const HCDGenderIndexTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 120%;
  margin-bottom: 0.9rem;
  height: 2rem;
  @media (max-width: 1280px) {
    margin-bottom: 1.8rem;
  }
`;

export const HCDGenderIndexLatestValueLabel = styled.div`
  color: #adadad;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 120%;

`;

export const HCDGenderIndexLatestValue = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 2rem;
  line-height: 120%;
  color: #e0824e;
  padding-bottom: 1rem;
`;
