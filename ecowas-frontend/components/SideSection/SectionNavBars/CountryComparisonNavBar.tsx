import React, { useState } from "react";
import CountryComparisonToggle from "./CountryComparisonToggle";
import {
  CustomMenu,
  CustomMenuItem,
  DimensionResultsNavBarTitle,
  DimensionResultsNavBarWrapper,
  DropdownIconWrapper,
  NavBarTabsContainer,
  NavBarWrapper,
} from "./SectionNavBars.style";
import { IndexDispatcher } from "utils/types";
import { FormattedMessage } from "react-intl";
import { useCountryComparisonContext } from "utils/context/CountryComparisonContext";
import { IndexEnum } from "utils/constants";
import DropdownIcon from "public/assets/icons/dropwdown-icon.svg";
import Image from "next/image";

const CountryComparisonNavBar: React.FC = () => {
  const { index, updateIndex } = useCountryComparisonContext();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const clickDropDown = (event) => {
    if (!anchorEl) handleOpen(event);
    else handleClose();
  };

  const handleChange = (index: IndexEnum) => {
    updateIndex(index);
    handleClose();
  };

  return (
    <NavBarWrapper>
      <NavBarTabsContainer>
        <div>
          <DimensionResultsNavBarWrapper onClick={clickDropDown}>
            <Image src={IndexDispatcher[index]?.icon} alt="" height={60} />
            <DimensionResultsNavBarTitle>
              <FormattedMessage id={IndexDispatcher[index]?.title} />
            </DimensionResultsNavBarTitle>
            <DropdownIconWrapper>
              <Image src={DropdownIcon} alt={""} width={15} />
            </DropdownIconWrapper>
          </DimensionResultsNavBarWrapper>
          <CustomMenu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <CustomMenuItem
              onClick={() => handleChange(IndexEnum.HCD_INTEGRATED_INDEX)}
            >
              <FormattedMessage id={"overview.integrated-hcd-index"} />
            </CustomMenuItem>
            <CustomMenuItem onClick={() => handleChange(IndexEnum.HEALTH)}>
              <FormattedMessage id={"overview.health"} />
            </CustomMenuItem>
            <CustomMenuItem onClick={() => handleChange(IndexEnum.EDUCATION)}>
              <FormattedMessage id={"overview.education"} />
            </CustomMenuItem>
            <CustomMenuItem
              onClick={() => handleChange(IndexEnum.ENTREPRENEURSHIP)}
            >
              <FormattedMessage id={"overview.entrepreneurship"} />
            </CustomMenuItem>
          </CustomMenu>
        </div>
      </NavBarTabsContainer>
      <CountryComparisonToggle />
    </NavBarWrapper>
  );
};

export default CountryComparisonNavBar;
