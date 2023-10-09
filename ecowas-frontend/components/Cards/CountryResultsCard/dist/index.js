"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var context_1 = require("utils/context");
var CountryResultsCard_style_1 = require("./CountryResultsCard.style");
var CountryResultsCardHeader_1 = require("./CountryResultsCardHeader");
var chart_js_1 = require("chart.js");
require("chartjs-plugin-datalabels");
var react_query_1 = require("react-query");
var country_results_1 = require("utils/api-requests/country-results");
var global_1 = require("utils/api-requests/global");
var CountryResultsRow_1 = require("./CountryResultsRow");
var styled_1 = require("@emotion/styled");
var material_1 = require("@mui/material");
chart_js_1.Chart.register(chart_js_1.CategoryScale, chart_js_1.LinearScale, chart_js_1.BarElement);
var CicularLoaderWrapper = styled_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n"], ["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n"])));
var CountryResultsCard = function () {
    var _a = context_1.useCountryResultsContext(), country = _a.country, valueType = _a.valueType;
    var _b = react_query_1.useMutation([country_results_1.GET_COUNTRY_RESULTS], country_results_1.getCountryResults), kpiValues = _b.data, getCountryResultHandler = _b.mutate, isLoading = _b.isLoading;
    var queryClient = react_query_1.useQueryClient();
    var countries = queryClient.getQueryData(global_1.GET_COUNTRIES);
    react_1.useEffect(function () {
        var _a;
        var countryId = (_a = countries === null || countries === void 0 ? void 0 : countries.find(function (c) { return c.label === country; })) === null || _a === void 0 ? void 0 : _a.id;
        countryId && getCountryResultHandler({ country: countryId });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [country, countries]);
    if (isLoading)
        return (react_1["default"].createElement(CicularLoaderWrapper, null,
            react_1["default"].createElement(material_1.CircularProgress, { color: "success" })));
    return (react_1["default"].createElement(CountryResultsCard_style_1.CountryResultsCardWrapper, null,
        react_1["default"].createElement(CountryResultsCard_style_1.CountryResultsTableContainer, null,
            react_1["default"].createElement(CountryResultsCardHeader_1["default"], null),
            react_1["default"].createElement("tbody", null, kpiValues === null || kpiValues === void 0 ? void 0 : kpiValues.map(function (kpiValue) {
                var _a, _b, _c, _d;
                return (react_1["default"].createElement(CountryResultsRow_1["default"], { key: kpiValue.id, title: kpiValue.kpi.label, description: kpiValue.kpi.description, valueType: valueType, baseline: +((_a = kpiValue.baseline) === null || _a === void 0 ? void 0 : _a.toFixed(2)), baselineNormalized: +kpiValue.baselineNormalized.toFixed(2), latestValue: +((_b = kpiValue.latestValue) === null || _b === void 0 ? void 0 : _b.toFixed(2)), latestValueNormalized: +kpiValue.latestValueNormalized.toFixed(2), targetForLatest: +((_c = kpiValue.targetLatestValue) === null || _c === void 0 ? void 0 : _c.toFixed(2)), targetForLatestNormalized: +kpiValue.targetLatestValueNormalized.toFixed(2), target2030: +((_d = kpiValue.target2030) === null || _d === void 0 ? void 0 : _d.toFixed(2)), target2030Normalized: +kpiValue.target2030Normalized.toFixed(2), rank: kpiValue.ranking }));
            })))));
};
exports["default"] = CountryResultsCard;
var templateObject_1;
