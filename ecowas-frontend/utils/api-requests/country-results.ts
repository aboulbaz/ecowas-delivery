import { IOverviewValues } from "utils/types";
import { EcowasClient } from "./http-client";

export const GET_COUNTRY_RESULTS = "GET_COUNTRY_RESULTS";

type IGetCountryResults = {
  country: number;
};

export const getCountryResults = async ({
  country,
}: IGetCountryResults): Promise<IOverviewValues[]> => {
  return EcowasClient.get(`kpi-values/all`, { country });
};
