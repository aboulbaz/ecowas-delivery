import { IOverviewValues } from "utils/types";
import { EcowasClient } from "./http-client";

export const GET_COUNTRY_COMPARISON = "GET_COUNTRY_COMPARISON";

type IGetCountryComparison = {
  kpi: number;
};

export const getCountryComparison = async ({
  kpi,
}: IGetCountryComparison): Promise<IOverviewValues[]> => {
  return EcowasClient.get(`kpi-values/kpi`, { kpi });
};
