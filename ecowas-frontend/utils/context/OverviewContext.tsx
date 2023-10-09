import React, { createContext, useReducer, useContext } from "react";
import { useQueryClient } from "react-query";
import { GET_COUNTRIES } from "utils/api-requests/global";
import { ICountry } from "utils/types";

interface OverviewStates {
  country?: ICountry;
}

interface OverviewContextProps extends OverviewStates {
  setInitialCountry: (newCountryId: number) => void;
}

const initialState: OverviewStates = {
  country: {
    id: 17,
    label: "ECOWAS",
  },
};

type Action = { type: "SET_COUNTRY"; payload?: ICountry };

const reducer = (state: OverviewStates, action: Action) => {
  switch (action.type) {
    case "SET_COUNTRY":
      return {
        ...state,
        country: action.payload && { ...action.payload },
      };
    default:
      return state;
  }
};

const OverviewContext = createContext<OverviewContextProps | undefined>(
  undefined
);

const OverviewProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const queryClient = useQueryClient();

  const countries = queryClient.getQueryData(GET_COUNTRIES) as ICountry[];

  const setInitialCountry = (countryId: number) => {
    dispatch({
      type: "SET_COUNTRY",
      payload: countries?.find((country) => country.id === countryId),
    });
  };

  return (
    <OverviewContext.Provider
      value={{
        country: state.country,
        setInitialCountry,
      }}
    >
      {children}
    </OverviewContext.Provider>
  );
};

const useOverviewContext = () => {
  const context = useContext(OverviewContext);
  if (!context) {
    throw new Error(
      "useOverviewContext must be used within a OverviewProvider"
    );
  }
  return context;
};

export { OverviewProvider, useOverviewContext };
