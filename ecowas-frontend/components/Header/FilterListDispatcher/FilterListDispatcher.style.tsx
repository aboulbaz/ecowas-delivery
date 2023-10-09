import styled from "@emotion/styled";
import { Checkbox, CheckboxProps } from "@mui/material";

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
  width: 0.8rem;
  height: 0.8rem;
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
