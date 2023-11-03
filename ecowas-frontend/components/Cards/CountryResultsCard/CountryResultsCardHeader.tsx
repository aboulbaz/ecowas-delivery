import React from "react";
import { useCountryResultsContext } from "utils/context";
import {
  CountryResultsTableCell,
  CountryResultsTableCellChart,
  CountryResultsTableCellTitle,
  CountryResultsTableCellWrapper,
  CountryResultsTableHead,
  CountryResultsTableRow,
} from "./CountryResultsCard.style";
import { VALUES_TYPE } from "utils/constants";
import { FormattedMessage } from "react-intl";

const CountryResultsCardHeader: React.FC = () => {
  const { valueType } = useCountryResultsContext();
  return (
    <CountryResultsTableHead>
      <CountryResultsTableRow>
        <CountryResultsTableCell>KPI</CountryResultsTableCell>
        {(valueType === VALUES_TYPE.BASELINE ||
          valueType === VALUES_TYPE.ALL) && (
          <CountryResultsTableCell>
            <CountryResultsTableCellWrapper>
              <CountryResultsTableCellTitle>
                <FormattedMessage id={"overview.baseline"} />
              </CountryResultsTableCellTitle>
              <CountryResultsTableCellChart
                isLong={valueType === VALUES_TYPE.BASELINE}
              >
                <FormattedMessage id={"overview.baseline-normalized"} />
              </CountryResultsTableCellChart>
              {/* <CountryResultsTableCellTitle>
                <FormattedMessage id={"overview.rank"} />
              </CountryResultsTableCellTitle> */}
            </CountryResultsTableCellWrapper>
          </CountryResultsTableCell>
        )}
        {(valueType === VALUES_TYPE.LATEST ||
          valueType === VALUES_TYPE.ALL) && (
          <CountryResultsTableCell>
            <CountryResultsTableCellWrapper>
              <CountryResultsTableCellTitle>
                <FormattedMessage
                  id={"overview.hcd-gender-index.latest-value"}
                />
              </CountryResultsTableCellTitle>
              <CountryResultsTableCellChart
                isLong={valueType === VALUES_TYPE.LATEST}
              >
                <FormattedMessage
                  id={"overview.hcd-gender-index.latest-value-normalized"}
                />
              </CountryResultsTableCellChart>
              <CountryResultsTableCellTitle>
                <FormattedMessage id={"overview.rank"} />
              </CountryResultsTableCellTitle>
            </CountryResultsTableCellWrapper>
          </CountryResultsTableCell>
        )}
        {(valueType === VALUES_TYPE.TARGET_FOR_LATEST ||
          valueType === VALUES_TYPE.ALL) && (
          <CountryResultsTableCell>
            <CountryResultsTableCellWrapper>
              <CountryResultsTableCellTitle>
                <FormattedMessage id={"overview.target-latest-value"} />
              </CountryResultsTableCellTitle>
              <CountryResultsTableCellChart
                isLong={valueType === VALUES_TYPE.TARGET_FOR_LATEST}
              >
                <FormattedMessage
                  id={"overview.target-latest-value-normalized"}
                />
              </CountryResultsTableCellChart>
              {/* <CountryResultsTableCellTitle>
                <FormattedMessage id={"overview.rank"} />
              </CountryResultsTableCellTitle> */}
            </CountryResultsTableCellWrapper>
          </CountryResultsTableCell>
        )}
        {(valueType === VALUES_TYPE.TARGET_2030 ||
          valueType === VALUES_TYPE.ALL) && (
          <CountryResultsTableCell>
            <CountryResultsTableCellWrapper>
              <CountryResultsTableCellTitle>
                <FormattedMessage id={"overview.target-2030"} />
              </CountryResultsTableCellTitle>
              <CountryResultsTableCellChart
                isLong={valueType === VALUES_TYPE.TARGET_2030}
              >
                <FormattedMessage id={"overview.target-2030-normalized"} />
              </CountryResultsTableCellChart>
              {/* <CountryResultsTableCellTitle>
                <FormattedMessage id={"overview.rank"} />
              </CountryResultsTableCellTitle> */}
            </CountryResultsTableCellWrapper>
          </CountryResultsTableCell>
        )}
      </CountryResultsTableRow>
    </CountryResultsTableHead>
  );
};

export default CountryResultsCardHeader;
