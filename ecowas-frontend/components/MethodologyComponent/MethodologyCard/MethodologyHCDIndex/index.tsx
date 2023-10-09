import React from "react";
import { LANGUAGES } from "utils/constants";
import MethodologyHCDIndexEn from "./MethodologyHCDIndexEn";
import MethodologyHCDIndexFr from "./MethodologyHCDIndexFr";
import MethodologyHCDIndexPo from "./MethodologyHCDIndexPo";
import { useLanguageContext } from "utils/context";

const MethodologyHCDIndexDispatcher: Record<LANGUAGES, React.ReactNode> = {
  [LANGUAGES.FR]: <MethodologyHCDIndexFr />,
  [LANGUAGES.EN]: <MethodologyHCDIndexEn />,
  [LANGUAGES.PO]: <MethodologyHCDIndexPo />,
};

const MethodologyHCDIndex: React.FC = () => {
  const { language } = useLanguageContext();
  return <>{MethodologyHCDIndexDispatcher[language]}</>;
};

export default MethodologyHCDIndex;
