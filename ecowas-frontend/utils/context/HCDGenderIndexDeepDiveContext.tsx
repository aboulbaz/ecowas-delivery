import React, { createContext, useReducer, useContext } from "react";
import { IndexEnum } from "utils/constants";

interface HCDGenderIndexDeepDiveStates {
  valueType: number;
  index: IndexEnum;
}

interface HCDGenderIndexDeepDiveContextProps
  extends HCDGenderIndexDeepDiveStates {
  setValueType: (value: number) => void;
  updateIndex: (newIndex: IndexEnum) => void;
}

const initialState: HCDGenderIndexDeepDiveStates = {
  valueType: 2,
  index: IndexEnum.HCD_INTEGRATED_INDEX,
};

type Action =
  | {
      type: "SET_VALUE_TYPE";
      payload: number;
    }
  | { type: "UPDATE_KPI_INDEX"; payload: IndexEnum };

const reducer = (state: HCDGenderIndexDeepDiveStates, action: Action) => {
  switch (action.type) {
    case "SET_VALUE_TYPE":
      return {
        ...state,
        valueType: action.payload,
      };
    case "UPDATE_KPI_INDEX":
      return {
        ...state,
        index: action.payload,
      };
    default:
      return state;
  }
};

const HCDGenderIndexDeepDiveContext = createContext<
  HCDGenderIndexDeepDiveContextProps | undefined
>(undefined);

const HCDGenderIndexDeepDiveProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateValueType = (value: number) => {
    dispatch({ type: "SET_VALUE_TYPE", payload: value });
  };

  const updateIndex = (newIndex: IndexEnum) => {
    dispatch({ type: "UPDATE_KPI_INDEX", payload: newIndex });
  };

  return (
    <HCDGenderIndexDeepDiveContext.Provider
      value={{
        valueType: state.valueType,
        index: state.index,
        setValueType: updateValueType,
        updateIndex,
      }}
    >
      {children}
    </HCDGenderIndexDeepDiveContext.Provider>
  );
};

const useHCDGenderIndexDeepDiveContext = () => {
  const context = useContext(HCDGenderIndexDeepDiveContext);
  if (!context) {
    throw new Error(
      "useHCDGenderIndexDeepDiveContext must be used within a HCDGenderIndexDeepDiveProvider"
    );
  }
  return context;
};

export { HCDGenderIndexDeepDiveProvider, useHCDGenderIndexDeepDiveContext };
