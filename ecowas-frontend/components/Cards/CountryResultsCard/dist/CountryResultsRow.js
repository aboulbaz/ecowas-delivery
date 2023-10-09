"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var CountryResultsCard_style_1 = require("./CountryResultsCard.style");
var constants_1 = require("utils/constants");
var CountryResultsCharts_1 = require("components/Charts/CountryResultsCharts");
var styled_1 = require("@emotion/styled");
var CountryResultsRowTitle = styled_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-weight: bold;\n"], ["\n  font-weight: bold;\n"])));
var CountryResultsRow = function (_a) {
    var title = _a.title, description = _a.description, valueType = _a.valueType, baseline = _a.baseline, baselineNormalized = _a.baselineNormalized, latestValue = _a.latestValue, latestValueNormalized = _a.latestValueNormalized, targetForLatest = _a.targetForLatest, targetForLatestNormalized = _a.targetForLatestNormalized, target2030 = _a.target2030, target2030Normalized = _a.target2030Normalized, rank = _a.rank;
    return (react_1["default"].createElement(CountryResultsCard_style_1.CountryResultsTableRow, null,
        react_1["default"].createElement(CountryResultsCard_style_1.CountryResultsTableCell, null,
            react_1["default"].createElement(CountryResultsRowTitle, null, title),
            " ",
            description),
        (valueType === constants_1.VALUES_TYPE.BASELINE ||
            valueType === constants_1.VALUES_TYPE.ALL) && (react_1["default"].createElement(CountryResultsCard_style_1.CountryResultsTableCell, null,
            react_1["default"].createElement(CountryResultsCard_style_1.CountryResultsTableCellWrapper, null,
                react_1["default"].createElement(CountryResultsCard_style_1.CountryResultsTableCellTitle, null, baseline),
                react_1["default"].createElement(CountryResultsCard_style_1.CountryResultsTableCellChart, { isLong: valueType === constants_1.VALUES_TYPE.BASELINE },
                    react_1["default"].createElement(CountryResultsCharts_1.HorizontalCountryResultsChart, { value: baselineNormalized, isLong: valueType === constants_1.VALUES_TYPE.BASELINE })),
                react_1["default"].createElement(CountryResultsCard_style_1.CountryResultsTableCellTitle, null,
                    react_1["default"].createElement(CountryResultsCard_style_1.CountryResultsRankTag, null, rank))))),
        (valueType === constants_1.VALUES_TYPE.LATEST || valueType === constants_1.VALUES_TYPE.ALL) && (react_1["default"].createElement(CountryResultsCard_style_1.CountryResultsTableCell, null,
            react_1["default"].createElement(CountryResultsCard_style_1.CountryResultsTableCellWrapper, null,
                react_1["default"].createElement(CountryResultsCard_style_1.CountryResultsTableCellTitle, null, latestValue),
                react_1["default"].createElement(CountryResultsCard_style_1.CountryResultsTableCellChart, { isLong: valueType === constants_1.VALUES_TYPE.LATEST },
                    react_1["default"].createElement(CountryResultsCharts_1.HorizontalCountryResultsChart, { value: latestValueNormalized, isLong: valueType === constants_1.VALUES_TYPE.LATEST })),
                react_1["default"].createElement(CountryResultsCard_style_1.CountryResultsTableCellTitle, null,
                    react_1["default"].createElement(CountryResultsCard_style_1.CountryResultsRankTag, null, rank))))),
        (valueType === constants_1.VALUES_TYPE.TARGET_FOR_LATEST ||
            valueType === constants_1.VALUES_TYPE.ALL) && (react_1["default"].createElement(CountryResultsCard_style_1.CountryResultsTableCell, null,
            react_1["default"].createElement(CountryResultsCard_style_1.CountryResultsTableCellWrapper, null,
                react_1["default"].createElement(CountryResultsCard_style_1.CountryResultsTableCellTitle, null, targetForLatest),
                react_1["default"].createElement(CountryResultsCard_style_1.CountryResultsTableCellChart, { isLong: valueType === constants_1.VALUES_TYPE.TARGET_FOR_LATEST },
                    react_1["default"].createElement(CountryResultsCharts_1.HorizontalCountryResultsChart, { value: targetForLatestNormalized, isLong: valueType === constants_1.VALUES_TYPE.TARGET_FOR_LATEST })),
                react_1["default"].createElement(CountryResultsCard_style_1.CountryResultsTableCellTitle, null,
                    react_1["default"].createElement(CountryResultsCard_style_1.CountryResultsRankTag, null, rank))))),
        (valueType === constants_1.VALUES_TYPE.TARGET_2030 ||
            valueType === constants_1.VALUES_TYPE.ALL) && (react_1["default"].createElement(CountryResultsCard_style_1.CountryResultsTableCell, null,
            react_1["default"].createElement(CountryResultsCard_style_1.CountryResultsTableCellWrapper, null,
                react_1["default"].createElement(CountryResultsCard_style_1.CountryResultsTableCellTitle, null, target2030),
                react_1["default"].createElement(CountryResultsCard_style_1.CountryResultsTableCellChart, { isLong: valueType === constants_1.VALUES_TYPE.TARGET_2030 },
                    react_1["default"].createElement(CountryResultsCharts_1.HorizontalCountryResultsChart, { value: target2030Normalized, isLong: valueType === constants_1.VALUES_TYPE.TARGET_2030 })),
                react_1["default"].createElement(CountryResultsCard_style_1.CountryResultsTableCellTitle, null,
                    react_1["default"].createElement(CountryResultsCard_style_1.CountryResultsRankTag, null, rank)))))));
};
exports["default"] = CountryResultsRow;
var templateObject_1;
