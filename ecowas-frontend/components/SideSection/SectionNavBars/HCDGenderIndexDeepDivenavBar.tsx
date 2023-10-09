import React, { useEffect, useState } from "react";
import HCDGenderIndexDeepDiveToggle from "./HCDGenderIndexDeepDiveToggle";
import {
  CustomMenu,
  CustomMenuItem,
  DimensionResultsNavBarTitle,
  DimensionResultsNavBarWrapper,
  DropdownIconWrapper,
  NavBarWrapper,
} from "./SectionNavBars.style";
import { IKPI, IndexDispatcher } from "utils/types";
import { FormattedMessage } from "react-intl";
import { IndexEnum } from "utils/constants";
import DropdownIcon from "public/assets/icons/dropwdown-icon.svg";
import Image from "next/image";
import { useHCDGenderIndexDeepDiveContext } from "utils/context/HCDGenderIndexDeepDiveContext";
import { useMutation } from "react-query";
import {
  GET_NESTED_KPIS,
  getNestedKPIs,
} from "utils/api-requests/hcd-gender-deep-dive";

const HCDGenderIndexDeepDivenavBar: React.FC = () => {
  const { index, updateIndex, setValueType } =
    useHCDGenderIndexDeepDiveContext();
  const [anchorEl, setAnchorEl] = useState(null);

  const [kpis, setKpis] = useState<IKPI[]>([]);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const { mutate: getNestedKPIsRequest } = useMutation(
    [GET_NESTED_KPIS],
    getNestedKPIs,
    {
      onSuccess: (data) => {
        setKpis(data);
        setValueType(index);
      },
    }
  );

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

  useEffect(() => {
    getNestedKPIsRequest(index);
  }, [index, getNestedKPIsRequest]);

  return (
    <NavBarWrapper>
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
      <HCDGenderIndexDeepDiveToggle
        kpis={
          kpis.length > 0
            ? [
                {
                  id: index,
                  label: "Aggregated score",
                  labelFrench: "Aggregated score",
                  labelPortuguese: "Aggregated score",
                },
                ...kpis,
              ]
            : []
        }
      />
    </NavBarWrapper>
  );
};

export default HCDGenderIndexDeepDivenavBar;
