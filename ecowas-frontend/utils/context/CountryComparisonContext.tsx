import React, { createContext, useReducer, useContext } from "react";
import { ECOWAS_DEFAULT_ID, IndexEnum } from "utils/constants";

interface GlobalStates {
  isDimensionView: boolean;
  index: IndexEnum;
  chosenCountry: number;
}

interface CountryComparisonContextProps extends GlobalStates {
  setIsDimensionView: (countries: boolean) => void;
  updateIndex: (newIndex: IndexEnum) => void;
  updateCountry: (value: number) => void;
}

const initialState: GlobalStates = {
  isDimensionView: false,
  index: IndexEnum.HCD_INTEGRATED_INDEX,
  chosenCountry: ECOWAS_DEFAULT_ID,
};

type Action =
  | { type: "SET_IS_DIMENSION_VIEW"; payload: boolean }
  | { type: "UPDATE_KPI_INDEX"; payload: IndexEnum }
  | { type: "UPDATE_COUNTRY_ID"; payload: number };

const reducer = (state: GlobalStates, action: Action) => {
  switch (action.type) {
    case "SET_IS_DIMENSION_VIEW":
      return {
        ...state,
        isDimensionView: action.payload,
      };
    case "UPDATE_KPI_INDEX":
      return {
        ...state,
        index: action.payload,
      };
    case "UPDATE_COUNTRY_ID":
      return {
        ...state,
        chosenCountry: action.payload,
      };
    default:
      return state;
  }
};

const CountryComparisonContext = createContext<
  CountryComparisonContextProps | undefined
>(undefined);

const CountryComparisonProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setIsDimensionView = (value: boolean) => {
    dispatch({ type: "SET_IS_DIMENSION_VIEW", payload: value });
  };

  const updateIndex = (newIndex: IndexEnum) => {
    dispatch({ type: "UPDATE_KPI_INDEX", payload: newIndex });
  };

  const updateCountry = (country: number) => {
    dispatch({ type: "UPDATE_COUNTRY_ID", payload: country });
  };

  return (
    <CountryComparisonContext.Provider
      value={{
        ...state,
        setIsDimensionView,
        updateIndex,
        updateCountry,
      }}
    >
      {children}
    </CountryComparisonContext.Provider>
  );
};

const useCountryComparisonContext = () => {
  const context = useContext(CountryComparisonContext);
  if (!context) {
    throw new Error(
      "useCountryComparisonContext must be used within a GlobalProvider"
    );
  }
  return context;
};

export { CountryComparisonProvider, useCountryComparisonContext };
