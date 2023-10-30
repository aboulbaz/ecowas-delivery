import React, { createContext, useReducer, useContext } from "react";
import { ECOWAS_DEFAULT_ID, IndexEnumHCDGenderIndex } from "utils/constants";

interface GlobalStates {
  isDimensionView: boolean;
  index: IndexEnumHCDGenderIndex;
  chosenCountry: number;
}

interface HCDGenderIndexContextProps extends GlobalStates {
  setIsDimensionView: (countries: boolean) => void;
  updateIndex: (newIndex: IndexEnumHCDGenderIndex) => void;
}

const initialState: GlobalStates = {
  isDimensionView: true,
  index: IndexEnumHCDGenderIndex.HCD_INTEGRATED_INDEX,
  chosenCountry: ECOWAS_DEFAULT_ID,
};

type Action =
  | { type: "SET_IS_DIMENSION_VIEW"; payload: boolean }
  | { type: "UPDATE_KPI_INDEX"; payload: IndexEnumHCDGenderIndex }
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

const HCDGenderIndexContext = createContext<
  HCDGenderIndexContextProps | undefined
>(undefined);

const HCDGenderIndexProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setIsDimensionView = (value: boolean) => {
    dispatch({ type: "SET_IS_DIMENSION_VIEW", payload: value });
  };

  const updateIndex = (newIndex: IndexEnumHCDGenderIndex) => {
    dispatch({ type: "UPDATE_KPI_INDEX", payload: newIndex });
  };

  return (
    <HCDGenderIndexContext.Provider
      value={{
        ...state,
        setIsDimensionView,
        updateIndex,
      }}
    >
      {children}
    </HCDGenderIndexContext.Provider>
  );
};

const useHCDGenderIndexContext = () => {
  const context = useContext(HCDGenderIndexContext);
  if (!context) {
    throw new Error(
      "useHCDGenderIndexContext must be used within a GlobalProvider"
    );
  }
  return context;
};

export { HCDGenderIndexProvider, useHCDGenderIndexContext };
