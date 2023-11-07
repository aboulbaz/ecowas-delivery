import React from "react";
import { IOverviewValues, LanguageDispatcher } from "utils/types";
import CountryResultsRow from "./CountryResultsRow";
import { LANGUAGES, VALUES_TYPE } from "utils/constants";

type Props = {
  kpiValues?: IOverviewValues[];
  language: LANGUAGES;
  valueType: VALUES_TYPE;
};

const CountryResultsRowLoop: React.FC<Props> = ({
  kpiValues,
  language,
  valueType,
}) => {
  return (
    <>
      {kpiValues?.map((kpiValue) => {
        return (
          <>
            <CountryResultsRow
              key={kpiValue.id}
              title={kpiValue.kpi[LanguageDispatcher[language].label]}
              description={
                kpiValue.kpi[LanguageDispatcher[language].description]
              }
              valueType={valueType}
              baseline={+kpiValue.baseline?.toFixed(2)}
              baselineNormalized={+kpiValue.baselineNormalized?.toFixed(2)}
              latestValue={+kpiValue.latestValue?.toFixed(2)}
              latestValueNormalized={
                +kpiValue.latestValueNormalized?.toFixed(2)
              }
              targetForLatest={+kpiValue.targetLatestValue?.toFixed(2)}
              targetForLatestNormalized={
                +kpiValue.targetLatestValueNormalized?.toFixed(2)
              }
              target2030={+kpiValue.target2030?.toFixed(2)}
              target2030Normalized={+kpiValue.target2030Normalized?.toFixed(2)}
              rank={kpiValue.ranking}
              hasParent={false}
            />
            {kpiValue?.childs?.map((childValue) => (
              <CountryResultsRow
                key={childValue?.id}
                title={childValue?.kpi[LanguageDispatcher[language].label]}
                description={
                  childValue?.kpi[LanguageDispatcher[language].description]
                }
                valueType={valueType}
                baseline={+childValue?.baseline?.toFixed(2)}
                baselineNormalized={+childValue?.baselineNormalized?.toFixed(2)}
                latestValue={+childValue?.latestValue?.toFixed(2)}
                latestValueNormalized={
                  +childValue?.latestValueNormalized?.toFixed(2)
                }
                targetForLatest={+childValue?.targetLatestValue?.toFixed(2)}
                targetForLatestNormalized={
                  +childValue?.targetLatestValueNormalized?.toFixed(2)
                }
                target2030={+childValue?.target2030?.toFixed(2)}
                target2030Normalized={
                  +childValue?.target2030Normalized?.toFixed(2)
                }
                rank={childValue?.ranking}
                hasParent={true}
              />
            ))}
          </>
        );
      })}
    </>
  );
};

export default CountryResultsRowLoop;
