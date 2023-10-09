import { FormControlLabel, ListItem } from "@mui/material";
import React from "react";
import {
  FilterCheckbox,
  FitlerCheckboxCheckedIcon,
  FitlerCheckboxIcon,
  FitlerListItemTitle,
  FitlerListItemWrapper,
} from "./FilterListDispatcher.style";
import { useIntl } from "react-intl";

const DimensionResultsFilter: React.FC = () => {
  const handleChange = () => {};
  const intl = useIntl();
  const dimensions = [
    "overview.integrated-hcd-index",
    "overview.health",
    "overview.education",
    "overview.entrepreneurship",
  ];
  return (
    <>
      <ListItem
        disablePadding
        sx={{
          marginBottom: "2rem"
        }}
      >
        <FitlerListItemWrapper>
          <FitlerListItemTitle>{"Dimensions"}</FitlerListItemTitle>
          <FormControlLabel
            key={"all"}
            label={"Select all"}
            sx={{
              color: "gray",
              fontSize: '10px'
            }}
            control={
              <FilterCheckbox
                onChange={handleChange}
                size="small"
                checkedIcon={<FitlerCheckboxCheckedIcon />}
                icon={<FitlerCheckboxIcon />}
              />
            }
          />
          {dimensions.map((dimension) => (
            <FormControlLabel
              key={dimension}
              label={intl.formatMessage({ id: dimension })}
              sx={{
                color: "gray",
                fontSize: '10px'
              }}
              control={
                <FilterCheckbox
                  onChange={handleChange}
                  size="small"
                  checkedIcon={<FitlerCheckboxCheckedIcon />}
                  icon={<FitlerCheckboxIcon />}
                />
              }
            />
          ))}
        </FitlerListItemWrapper>
      </ListItem>
      <ListItem
        sx={{
          marginBottom: "2rem",
        }}
        disablePadding
      >
        <FitlerListItemWrapper>
          <FitlerListItemTitle>{"Indicators"}</FitlerListItemTitle>
          <FormControlLabel
            key={"all"}
            label={"Select all"}
            sx={{
              color: "gray",
              fontSize: '10px'
            }}
            control={
              <FilterCheckbox
                onChange={handleChange}
                size="small"
                checkedIcon={<FitlerCheckboxCheckedIcon />}
                icon={<FitlerCheckboxIcon />}
              />
            }
          />
          {dimensions.map((dimension) => (
            <FormControlLabel
              key={dimension}
              label={intl.formatMessage({ id: dimension })}
              sx={{
                color: "gray",
                fontSize: '10px'
              }}
              control={
                <FilterCheckbox
                  onChange={handleChange}
                  size="small"
                  checkedIcon={<FitlerCheckboxCheckedIcon />}
                  icon={<FitlerCheckboxIcon />}
                />
              }
            />
          ))}
        </FitlerListItemWrapper>
      </ListItem>
    </>
  );
};

export default DimensionResultsFilter;
