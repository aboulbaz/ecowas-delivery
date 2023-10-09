import { IOverviewValues } from "utils/types";
import { EcowasClient } from "./http-client";

export const GET_DIMENSION_RESULTS = "GET_DIMENSION_RESULTS";

type IGetDimensionResults = {
  country: number;
  kpi: number;
};

export const getDimensionResults = async ({
  country,
  kpi,
}: IGetDimensionResults): Promise<IOverviewValues[]> => {
  return EcowasClient.get(`kpi-values/nested`, { country, kpi });
};
