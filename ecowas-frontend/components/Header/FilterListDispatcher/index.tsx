import { FormControlLabel, ListItem } from "@mui/material";
import React from "react";
import { Routes } from "utils/constants";
import OverviewFilter from "./OverviewFilter";
import { useRouter } from "next/router";

const FilterListDispatcherObject: Record<Partial<Routes>, React.ReactNode> = {
  [Routes.OVERVIEW]: <OverviewFilter />,
  [Routes.DIMENSION_RESULTS]: <OverviewFilter />,
  [Routes.COUNTRY_COMPARISON]: <></>,
  [Routes.COUNTRY_RESULTS]: <></>,
  [Routes.HCD_GENDER_INDEX]: <></>,
  [Routes.HCD_GENDER_INDEX_DEEP_DIVE]: <></>,
  [Routes.METHODOLOGY]: <></>,
};

const FilterListDispatcher: React.FC = () => {
  const router = useRouter();
  return <>{FilterListDispatcherObject[router.pathname]}</>;
};

export default FilterListDispatcher;
