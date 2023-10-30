import { EcowasClient } from "./http-client";
import HCDIcon from "public/assets/icons/integrated-hcd-index-icon.svg";
import HealthIcon from "public/assets/icons/icon-health.svg";
import EducationIcon from "public/assets/icons/education-icon.svg";
import EntrepreneurshipIcon from "public/assets/icons/entrepreneurship-icon.svg";
import { ICountry, IKPI, IOverviewValues } from "utils/types";

export const GET_ALL_INDEX_KPIS = "GET_ALL_INDEX_KPIS";
export const GET_ALL_MAIN_KPIS = "GET_ALL_MAIN_KPIS";
export const GET_COUNTRIES_INDEX = "GET_COUNTRIES_INDEX";

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

export const getAllIndexKpis = async (
  id: number
): Promise<IOverviewValues[]> => {
  return EcowasClient.get(`gender-kpi-values/index/all/${id}`);
};

export const getAllMainKpis = async (): Promise<IKPI[]> => {
  return EcowasClient.get(`kpi/gender-index/main`);
};

export const getCountriesKpisIndex = async (): Promise<ICountry[]> => {
  return EcowasClient.get("country/hcd-gender-index");
};
