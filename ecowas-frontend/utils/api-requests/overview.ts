import { EcowasClient } from "./http-client";
import HCDIcon from "public/assets/icons/integrated-hcd-index-icon.svg";
import HealthIcon from "public/assets/icons/icon-health.svg";
import EducationIcon from "public/assets/icons/education-icon.svg";
import EntrepreneurshipIcon from "public/assets/icons/entrepreneurship-icon.svg";
import { IOverviewValues } from "utils/types";

export const GET_OVERVIEW_VALUES = "GET_OVERVIEW_VALUES";
export const GET_GENDER_OVERVIEW_VALUES = "GET_GENDER_OVERVIEW_VALUES";

type IconDIspatcherValue = {
  icon: any;
  title: string;
};

export const IconDispatcher: Record<number, IconDIspatcherValue> = {
  22: { icon: HCDIcon, title: "overview.integrated-hcd-index" },
  1: { icon: HealthIcon, title: "overview.health" },
  9: { icon: EducationIcon, title: "overview.education" },
  18: { icon: EntrepreneurshipIcon, title: "overview.entrepreneurship" },
};

export const getOverviewValues = async (
  countryId: number
): Promise<IOverviewValues[]> => {
  return EcowasClient.get(`kpi-values/index/${countryId}`);
};

export const getGenderOverviewValues = async (
  countryId: number
): Promise<IOverviewValues[]> => {
  return EcowasClient.get(`gender-kpi-values/index/${countryId}`);
};


export const getOverviewValuesGenderIndex = async (
  countryId: number
): Promise<IOverviewValues[]> => {
  return EcowasClient.get(`gender-kpi-values/index/${countryId}`);
};
