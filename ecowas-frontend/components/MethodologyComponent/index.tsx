import React from "react";
import MethodologyWrapper from "./MethodologyWrapper";
import MethodologyCard from "./MethodologyCard";
import { useIntl } from "react-intl";
import MethodologyGenderIndex from "./MethodologyCard/MethodologyGenderIndex";
import MethodologyHCDIndex from "./MethodologyCard/MethodologyHCDIndex";

const MethodologyComponent: React.FC = () => {
  const intl = useIntl();
  return (
    <MethodologyWrapper>
      <MethodologyCard
        title={intl.formatMessage({ id: "methodology.integrated-hcd-index" })}
        content={<MethodologyHCDIndex />}
      />
      <MethodologyCard
        title={intl.formatMessage({
          id: "methodology.integrated-gender-index",
        })}
        content={<MethodologyGenderIndex />}
      />
    </MethodologyWrapper>
  );
};

export default MethodologyComponent;
