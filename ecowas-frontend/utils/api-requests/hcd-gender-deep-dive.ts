import { EcowasClient } from "./http-client";
import HCDIcon from "public/assets/icons/integrated-hcd-index-icon.svg";
import HealthIcon from "public/assets/icons/icon-health.svg";
import EducationIcon from "public/assets/icons/education-icon.svg";
import EntrepreneurshipIcon from "public/assets/icons/entrepreneurship-icon.svg";
import { IKPI, IOverviewValues } from "utils/types";

export const GET_NESTED_KPIS = "GET_NESTED_KPIS";
export const GET_NESTED_HCD_KPIS = "GET_NESTED_HCD_KPIS";

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

export const getNestedKPIs = async (id: number): Promise<IKPI[]> => {
  return await EcowasClient.get(`kpi/${id}/nested`);
};


export const getNestedHcdGenderKPIs = async (id: number): Promise<IKPI[]> => {
  return await EcowasClient.get(`kpi/gender-index/${id}/nested`);
};

export const getKpiData = async (id: number): Promise<IOverviewValues[]> => {
  return await EcowasClient.get(`gender-kpi-values?kpi=${id}`);
}
