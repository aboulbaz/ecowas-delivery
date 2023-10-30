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
import { IKPI, IndexHcdGenderDispatcher } from "utils/types";
import { FormattedMessage } from "react-intl";
import { IndexEnumHCDGenderIndex } from "utils/constants";
import DropdownIcon from "public/assets/icons/dropwdown-icon.svg";
import Image from "next/image";
import { useHCDGenderIndexDeepDiveContext } from "utils/context/HCDGenderIndexDeepDiveContext";
import { useMutation } from "react-query";
import {
  GET_NESTED_HCD_KPIS,
  getNestedHcdGenderKPIs,
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
    [GET_NESTED_HCD_KPIS],
    getNestedHcdGenderKPIs,
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

  const handleChange = (index: IndexEnumHCDGenderIndex) => {
    updateIndex(index);
    handleClose();
  };

  useEffect(() => {
    getNestedKPIsRequest(index);
  }, [index, getNestedKPIsRequest]);

  return (
    <NavBarWrapper>
      <DimensionResultsNavBarWrapper onClick={clickDropDown}>
        <Image src={IndexHcdGenderDispatcher[index]?.icon} alt="" height={60} />
        <DimensionResultsNavBarTitle>
          <FormattedMessage id={IndexHcdGenderDispatcher[index]?.title} />
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
          onClick={() =>
            handleChange(IndexEnumHCDGenderIndex.HCD_INTEGRATED_INDEX)
          }
        >
          <FormattedMessage id={"overview.integrated-hcd-index"} />
        </CustomMenuItem>
        <CustomMenuItem
          onClick={() => handleChange(IndexEnumHCDGenderIndex.HEALTH)}
        >
          <FormattedMessage id={"overview.health"} />
        </CustomMenuItem>
        <CustomMenuItem
          onClick={() => handleChange(IndexEnumHCDGenderIndex.EDUCATION)}
        >
          <FormattedMessage id={"overview.education"} />
        </CustomMenuItem>
        <CustomMenuItem
          onClick={() => handleChange(IndexEnumHCDGenderIndex.ENTREPRENEURSHIP)}
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
