import React from "react";
import { LANGUAGES } from "utils/constants";
import MethodologyGenderIndexEn from "./MethodologyGenderIndexEn";
import MethodologyGenderIndexFr from "./MethodologyGenderIndexFr";
import MethodologyGenderIndexPo from "./MethodologyGenderIndexPo";
import { useLanguageContext } from "utils/context";

const MethodologyGenderIndexDispatcher: Record<LANGUAGES, React.ReactNode> = {
  [LANGUAGES.FR]: <MethodologyGenderIndexFr />,
  [LANGUAGES.EN]: <MethodologyGenderIndexEn />,
  [LANGUAGES.PO]: <MethodologyGenderIndexPo />,
};

const MethodologyGenderIndex: React.FC = () => {
  const { language } = useLanguageContext();
  return <>{MethodologyGenderIndexDispatcher[language]}</>;
};

export default MethodologyGenderIndex;
