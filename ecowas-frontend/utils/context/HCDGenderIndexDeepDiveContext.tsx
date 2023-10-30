import React, { createContext, useReducer, useContext } from "react";
import { IndexEnumHCDGenderIndex } from "utils/constants";

interface HCDGenderIndexDeepDiveStates {
  valueType: number;
  index: IndexEnumHCDGenderIndex;
}

interface HCDGenderIndexDeepDiveContextProps
  extends HCDGenderIndexDeepDiveStates {
  setValueType: (value: number) => void;
  updateIndex: (newIndex: IndexEnumHCDGenderIndex) => void;
}

const initialState: HCDGenderIndexDeepDiveStates = {
  valueType: 2,
  index: IndexEnumHCDGenderIndex.HCD_INTEGRATED_INDEX,
};

type Action =
  | {
      type: "SET_VALUE_TYPE";
      payload: number;
    }
  | { type: "UPDATE_KPI_INDEX"; payload: IndexEnumHCDGenderIndex };

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

  const updateIndex = (newIndex: IndexEnumHCDGenderIndex) => {
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
