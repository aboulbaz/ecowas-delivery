import React from "react";
import {
  CountryResultsRankTag,
  CountryResultsTableCell,
  CountryResultsTableCellChart,
  CountryResultsTableCellTitle,
  CountryResultsTableCellWrapper,
  CountryResultsTableRow,
} from "./CountryResultsCard.style";
import { VALUES_TYPE } from "utils/constants";
import { HorizontalCountryResultsChart } from "components/Charts/CountryResultsCharts";
import { useCountryResultsContext } from "utils/context";
import styled from "@emotion/styled";

type Props = {
  valueType: VALUES_TYPE;
  description?: string;
  title: string;
  baseline: number;
  baselineNormalized: number;
  latestValue: number;
  latestValueNormalized: number;
  targetForLatest: number;
  targetForLatestNormalized: number;
  target2030: number;
  target2030Normalized: number;
  rank: number;
  hasParent?: boolean;
};

type CountryResultsRowTitleProps = {
  hasParent?: boolean;
};

const CountryResultsRowTitle = styled.div<CountryResultsRowTitleProps>`
  font-weight: bold;
  color: ${({ theme, hasParent }) =>
    !hasParent ? theme.colors.primary : theme.colors.black};
`;

const CountryResultsRow: React.FC<Props> = ({
  title,
  description,
  valueType,
  baseline,
  baselineNormalized,
  latestValue,
  latestValueNormalized,
  targetForLatest,
  targetForLatestNormalized,
  target2030,
  target2030Normalized,
  rank,
  hasParent,
}) => {
  return (
    <CountryResultsTableRow>
      <CountryResultsTableCell>
        <CountryResultsRowTitle hasParent={hasParent}>{title}</CountryResultsRowTitle> {description}
      </CountryResultsTableCell>
      {(valueType === VALUES_TYPE.BASELINE ||
        valueType === VALUES_TYPE.ALL) && (
        <CountryResultsTableCell>
          <CountryResultsTableCellWrapper>
            <CountryResultsTableCellTitle>
              {baseline}
            </CountryResultsTableCellTitle>
            <CountryResultsTableCellChart
              isLong={valueType === VALUES_TYPE.BASELINE}
            >
              <HorizontalCountryResultsChart
                value={baselineNormalized}
                isLong={valueType === VALUES_TYPE.BASELINE}
                hasParent={!!hasParent}
              />
            </CountryResultsTableCellChart>
            {/* <CountryResultsTableCellTitle>
              <CountryResultsRankTag>{rank}</CountryResultsRankTag>
            </CountryResultsTableCellTitle> */}
          </CountryResultsTableCellWrapper>
        </CountryResultsTableCell>
      )}
      {(valueType === VALUES_TYPE.LATEST || valueType === VALUES_TYPE.ALL) && (
        <CountryResultsTableCell>
          <CountryResultsTableCellWrapper>
            <CountryResultsTableCellTitle>
              {latestValue}
            </CountryResultsTableCellTitle>
            <CountryResultsTableCellChart
              isLong={valueType === VALUES_TYPE.LATEST}
            >
              <HorizontalCountryResultsChart
                value={latestValueNormalized}
                isLong={valueType === VALUES_TYPE.LATEST}
                hasParent={!!hasParent}
              />
            </CountryResultsTableCellChart>
            <CountryResultsTableCellTitle>
              <CountryResultsRankTag>{rank}</CountryResultsRankTag>
            </CountryResultsTableCellTitle>
          </CountryResultsTableCellWrapper>
        </CountryResultsTableCell>
      )}
      {(valueType === VALUES_TYPE.TARGET_FOR_LATEST ||
        valueType === VALUES_TYPE.ALL) && (
        <CountryResultsTableCell>
          <CountryResultsTableCellWrapper>
            <CountryResultsTableCellTitle>
              {targetForLatest}
            </CountryResultsTableCellTitle>
            <CountryResultsTableCellChart
              isLong={valueType === VALUES_TYPE.TARGET_FOR_LATEST}
            >
              <HorizontalCountryResultsChart
                value={targetForLatestNormalized}
                isLong={valueType === VALUES_TYPE.TARGET_FOR_LATEST}
                hasParent={!!hasParent}
              />
            </CountryResultsTableCellChart>
            {/* <CountryResultsTableCellTitle>
              <CountryResultsRankTag>{rank}</CountryResultsRankTag>
            </CountryResultsTableCellTitle> */}
          </CountryResultsTableCellWrapper>
        </CountryResultsTableCell>
      )}
      {(valueType === VALUES_TYPE.TARGET_2030 ||
        valueType === VALUES_TYPE.ALL) && (
        <CountryResultsTableCell>
          <CountryResultsTableCellWrapper>
            <CountryResultsTableCellTitle>
              {target2030}
            </CountryResultsTableCellTitle>
            <CountryResultsTableCellChart
              isLong={valueType === VALUES_TYPE.TARGET_2030}
            >
              <HorizontalCountryResultsChart
                value={target2030Normalized}
                isLong={valueType === VALUES_TYPE.TARGET_2030}
                hasParent={!!hasParent}
              />
            </CountryResultsTableCellChart>
            {/* <CountryResultsTableCellTitle>
              <CountryResultsRankTag>{rank}</CountryResultsRankTag>
            </CountryResultsTableCellTitle> */}
          </CountryResultsTableCellWrapper>
        </CountryResultsTableCell>
      )}
    </CountryResultsTableRow>
  );
};

export default CountryResultsRow;
