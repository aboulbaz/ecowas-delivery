import React, { createContext, useState, useContext, useReducer } from "react";
import { useQueryClient } from "react-query";
import { GET_COUNTRIES } from "utils/api-requests/global";
import { IndexEnum } from "utils/constants";
import { ICountry } from "utils/types";

interface DimensionResultsStates {
  index: IndexEnum;
  country?: ICountry;
}

interface DimensionResultsContextProps extends DimensionResultsStates {
  setIndex: (newIndex: IndexEnum) => void;
  setInitialCountry: (newCountryId: number) => void;
}

const initialState: DimensionResultsStates = {
  index: IndexEnum.HCD_INTEGRATED_INDEX,
  country: {
    id: 17,
    label: "ECOWAS",
  },
};

type Action =
  | { type: "SET_COUNTRY"; payload?: ICountry }
  | { type: "SET_INDEX"; payload?: IndexEnum };

const reducer = (state: DimensionResultsStates, action: Action) => {
  switch (action.type) {
    case "SET_COUNTRY":
      return {
        ...state,
        country: action.payload && { ...action.payload },
      };
    case "SET_INDEX":
      return {
        ...state,
        index: action.payload,
      };
    default:
      return state;
  }
};

const DimensionResultsContext = createContext<
  DimensionResultsContextProps | undefined
>(undefined);

const DimensionResultsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const queryClient = useQueryClient();

  const countries = queryClient.getQueryData(GET_COUNTRIES) as ICountry[];

  const setIndex = (newIndex: IndexEnum) => {
    dispatch({
      type: "SET_INDEX",
      payload: newIndex,
    });
  };

  const setInitialCountry = (countryId: number) => {
    dispatch({
      type: "SET_COUNTRY",
      payload: countries?.find((country) => country.id === countryId),
    });
  };

  return (
    <DimensionResultsContext.Provider
      value={{
        index: state.index || IndexEnum.HCD_INTEGRATED_INDEX,
        country: state.country,
        setIndex,
        setInitialCountry,
      }}
    >
      {children}
    </DimensionResultsContext.Provider>
  );
};

const useDimensionResultsContext = (): DimensionResultsContextProps => {
  const context = useContext(DimensionResultsContext);
  if (!context) {
    throw new Error(
      "useDimensionResultsContext must be used within a DimensionResultsProvider"
    );
  }
  return context;
};

export { DimensionResultsProvider, useDimensionResultsContext };
