import React, { createContext, useReducer, useContext } from "react";
import { ICountry } from "utils/types";

interface GlobalStates {
  countries: ICountry[];
}

interface GlobalContextProps extends GlobalStates {
  setInitialCountry: (countries: ICountry[]) => void;
}

const initialState: GlobalStates = {
  countries: [],
};

type Action = { type: "SET_INITIAL_COUNTRIES"; payload: ICountry[] };

const reducer = (state: GlobalStates, action: Action) => {
  switch (action.type) {
    case "SET_INITIAL_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
      };
    default:
      return state;
  }
};

const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setInitialCountry = (initialCountries: ICountry[]) => {
    dispatch({ type: "SET_INITIAL_COUNTRIES", payload: initialCountries });
  };

  return (
    <GlobalContext.Provider
      value={{
        countries: state.countries,
        setInitialCountry,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};

export { GlobalProvider, useGlobalContext };
