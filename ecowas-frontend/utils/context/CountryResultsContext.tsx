import React, { createContext, useReducer, useContext } from "react";
import { VALUES_TYPE } from "utils/constants";

interface CountryResultsStates {
  valueType: VALUES_TYPE;
  countries: string[];
  country: string;
}

interface CountryResultsContextProps extends CountryResultsStates {
  setCountry: (newCountry: string) => void;
  setValueType: (value: VALUES_TYPE) => void;
}

const initialState: CountryResultsStates = {
  valueType: VALUES_TYPE.ALL,
  countries: [
    "Cabo Verde",
    "Benin",
    "Burkina Faso",
    "Cote d'Ivoire",
    "Ghana",
    "Guinea",
    "Guinea-Bissau",
    "Liberia",
    "Mali",
    "Niger",
    "Nigeria",
    "Senegal",
    "Sierra Leone",
    "Togo",
  ],
  country: "Cabo Verde",
};

type Action =
  | { type: "SET_INITIAL_COUNTRIES"; payload: string[] }
  | { type: "SET_COUNTRY"; payload: string }
  | { type: "SET_VALUE_TYPE"; payload: VALUES_TYPE };

const reducer = (state: CountryResultsStates, action: Action) => {
  switch (action.type) {
    case "SET_INITIAL_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
      };
    case "SET_COUNTRY":
      return {
        ...state,
        country: action.payload,
      };
    case "SET_VALUE_TYPE":
      return {
        ...state,
        valueType: action.payload,
      };
    default:
      return state;
  }
};

const CountryResultsContext = createContext<
  CountryResultsContextProps | undefined
>(undefined);

const CountryResultsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateCountry = (newCountry: string) => {
    dispatch({ type: "SET_COUNTRY", payload: newCountry });
  };

  const updateValueType = (value: VALUES_TYPE) => {
    dispatch({ type: "SET_VALUE_TYPE", payload: value });
  };

  return (
    <CountryResultsContext.Provider
      value={{
        country: state.country,
        setCountry: updateCountry,
        countries: state.countries,
        valueType: state.valueType,
        setValueType: updateValueType,
      }}
    >
      {children}
    </CountryResultsContext.Provider>
  );
};

const useCountryResultsContext = () => {
  const context = useContext(CountryResultsContext);
  if (!context) {
    throw new Error(
      "useCountryResultsContext must be used within a CountryResultsProvider"
    );
  }
  return context;
};

export { CountryResultsProvider, useCountryResultsContext };
