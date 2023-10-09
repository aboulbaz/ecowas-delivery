import styled from "@emotion/styled";
import { Button, ButtonProps, Checkbox, CheckboxProps } from "@mui/material";
import Image, { ImageProps } from "next/image";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 5.7rem;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 2rem;
  @media (max-width: 1650px) {
    height: 5rem;
  }
  @media (max-width: 1184px) {
    height: 4.5rem;
  }
`;

export const NavMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  height: 100%;
  border-radius: 5px;
  padding-left: 1.5rem;
  padding-right: 1rem;
  padding-top: 1rem;
  padding-bottom: 0;
`;

export const NavMenuList = styled.div`
  display: flex;
  gap: 2.5rem;
  flex-grow: 1;
  @media (max-width: 1650px) {
    gap: 1rem;
  }
  @media (max-width: 1184px) {
    gap: 0.5rem;
  }
`;

type NavMenuListItemProps = {
  isActive?: boolean;
  maxWidth?: boolean;
};

export const NavMenuListItem = styled.div<NavMenuListItemProps>`
  height: 100%;
  border-bottom: ${(props) =>
    props.isActive ? `4px solid ${props.theme.colors.primary}` : "none"};
  font-style: normal;
  font-weight: ${(props) => (props.isActive ? "800" : "400")};
  font-size: 14px;
  line-height: 120%;
  max-width: ${({ maxWidth }) => (maxWidth ? "none" : "none")};
  color: ${(props) =>
    props.isActive ? `${props.theme.colors.primary}` : "#000"};
  @media (max-width: 1650px) {
    font-size: 0.7rem;
  }
`;

export const NavMenuTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 12px;
  @media (max-width: 1650px) {
    font-size: 0.8rem;
  }
  @media (max-width: 1184px) {
    font-size: 0.5px;
  }
`;

export const TitleWrapper = styled.div`
  padding: 1.5rem 2rem;
  display: flex;
  gap: 0.7rem;
  align-items: center;
`;

export const CustomH1 = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 1rem;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 5px 0;
`;

export const CustomPTag = styled.p`
  margin: 5px 0;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 120%;
`;

export const LogoWrapper = styled.div`
  margin-top: 1rem;
  margin-right: 1.5rem;
  @media (max-width: 1650px) {
    margin-top: 1.5rem;
  }
`;

export const StyledLogoImage = styled(Image)<ImageProps>`
  width: 74px;
  height: 74px;
  @media (max-width: 1650px) {
    width: 50px;
    height: 50px;
  }
`;

export const FilterWrapper = styled.div`
  margin-top: 2rem;
`;

export const FilterButton = styled(Button)<ButtonProps>`
  width: 7.8rem;
  font-size: 0.875rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverSecondary};
  }
  @media (max-width: 1650px) {
    width: 6rem;
    font-size: 0.7rem;
  }
`;

export const FilterListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
`;

export const FilterListTitle = styled.h3``;

export const FilterCrossButton = styled(Button)<ButtonProps>`
  width: 0;
  height: 0;
  padding: 0.7rem;
  min-width: 1.5rem;
  margin: 18.8px 0;
  background-color: ${({ theme }) => theme.colors.secondary};
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverSecondary};
  }
`;

export const FitlerListItemWrapper = styled.div`
  display: flex;
  padding: 0 1rem;
  flex-direction: column;
`;

export const FitlerListItemTitle = styled.h4`
  margin: 0.5rem 0;
`;

export const FitlerCheckboxIcon = styled.span`
  border-radius: 3px;
  width: 16px;
  height: 16px;
  box-shadow: 0 0 0 1px rgb(16 22 26 / 40%);
  background-color: #f5f8fa;
  .Mui-focusVisible & {
    outline: "2px auto rgba(19,124,189,.6)";
    outline-offset: 2;
  }
  input:disabled ~ & {
    box-shadow: "none";
  }
`;

export const FitlerCheckboxCheckedIcon = styled(FitlerCheckboxIcon)`
  background-color: ${({ theme }) => theme.colors.secondary};
  &:before {
    display: block;
    width: 10px;
    height: 10px;
  }
`;
export const FilterCheckbox = styled(Checkbox)<CheckboxProps>`
  height: 1rem;
`;
