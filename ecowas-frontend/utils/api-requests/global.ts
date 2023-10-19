import { EcowasClient } from "./http-client";

export const GET_COUNTRIES = "GET_COUNTRIES";

export const getCountries = async () => {
  return EcowasClient.get("country");
};

