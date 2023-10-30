import styled from "@emotion/styled";
import { Menu, MenuItem } from "@mui/material";
import Image from "next/image";

export const DimensionResultsNavBarWrapper = styled.div`
  display: flex;
  gap: 1rem;
  max-width: 23rem;
  cursor: pointer;
`;

export const DimensionResultsNavBarTitle = styled.div`
  color: ${({ theme }) => theme.colors.white};
  line-height: 120%;
  font-weight: 800;
  padding: 0.8rem;
  padding-right: 0;
  max-width: 18rem;
  @media (max-width: 1400px) {
    font-size: 12px;
  }
`;

export const DropdownIconWrapper = styled.div`
  padding-top: 0.6rem;
`;

export const CustomMenu = styled(Menu)`
  margin-top: 1.5rem;
  width: 100%;
  border-radius: 15px;

  .MuiPaper-root {
    background-color: #fff;
    border: 1px solid #ccc;
  }
  ul {
    padding: 0;
    border-radius: 15px;
  }
`;

export const CustomMenuItem = styled(MenuItem)`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const NavBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;


export const NavBarTabsContainer = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
`;
type NavigationListWrapperProps = {
  backgroundColor: string;
};

export const NavigationListWrapper = styled.ul<NavigationListWrapperProps>`
  list-style: none;
  display: flex;
  border-radius: 67px;
  background: ${({ backgroundColor }) => backgroundColor};
  height: 2rem;
  padding: 0;
`;

export const HCDDeepDiveNavigationListWrapper = styled.ul<NavigationListWrapperProps>`
  list-style: none;
  display: flex;
  border-radius: 67px;
  background: ${({ backgroundColor }) => backgroundColor};
  padding: 0;
`;

type NavigationListItemProps = {
  isClicked?: boolean;
  backgroundColor: string;
};

export const NavigationListItem = styled.li<NavigationListItemProps>`
  background-color: ${({ isClicked, theme, backgroundColor }) =>
    isClicked ? theme.colors.white : backgroundColor};
  color: ${({ isClicked, theme }) =>
    isClicked ? theme.colors.black : theme.colors.primary};
  height: 32px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 67px;
  font-size: 12px;
  padding: 1rem;
`;

export const HCDDeepDiveNavigationListItem = styled.li<NavigationListItemProps>`
  background-color: ${({ isClicked, theme, backgroundColor }) =>
    isClicked ? theme.colors.white : backgroundColor};
  color: ${({ isClicked, theme }) =>
    isClicked ? theme.colors.black : theme.colors.primary};
  height: 32px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 67px;
  font-size: 9px;
  padding: 0.3rem;
  @media (min-width: 1920px) {
    font-size: 12px;
  }
  @media (max-width: 1400px) {
    font-size: 8px;
  }
  @media (max-width: 1184px) {
    font-size: 9px;
  }
`;

export const CountryComparisonNavBarWrapper = styled.div`
  padding-left: 0.5rem;
`;
