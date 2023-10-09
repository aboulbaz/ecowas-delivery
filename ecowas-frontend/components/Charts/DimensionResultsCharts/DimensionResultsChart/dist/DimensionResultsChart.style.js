"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.DimensionResultsChartTitle = exports.DimensionResultsChartIndicator = exports.DimensionResultsChartValueWrapper = exports.DimensionResultsChartIndicatorWrapper = exports.ChartWrapper = void 0;
var styled_1 = require("@emotion/styled");
exports.ChartWrapper = styled_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 1rem;\n  padding-bottom: 0;\n  width: 60%;\n  height: 9rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"], ["\n  padding: 1rem;\n  padding-bottom: 0;\n  width: 60%;\n  height: 9rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"])));
exports.DimensionResultsChartIndicatorWrapper = styled_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  position: relative;\n  width: 100%;\n  margin-top: -1rem;\n"], ["\n  display: flex;\n  position: relative;\n  width: 100%;\n  margin-top: -1rem;\n"])));
exports.DimensionResultsChartValueWrapper = styled_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  left: ", ";\n  color: ", ";\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 120%;\n  max-width: 5rem;\n  margin-bottom: -1rem;\n  display: flex;\n  height: 1.5rem;\n"], ["\n  position: absolute;\n  left: ", ";\n  color: ", ";\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 120%;\n  max-width: 5rem;\n  margin-bottom: -1rem;\n  display: flex;\n  height: 1.5rem;\n"])), function (_a) {
    var value = _a.value;
    return "calc(" + value + "% - 1rem)";
}, function (_a) {
    var color = _a.color;
    return color;
});
exports.DimensionResultsChartIndicator = styled_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  border-right: ", ";\n  padding-right: 5px;\n"], ["\n  border-right: ", ";\n  padding-right: 5px;\n"])), function (_a) {
    var color = _a.color;
    return "2px dotted " + color;
});
exports.DimensionResultsChartTitle = styled_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  padding-left: 5px;\n  min-width: 3rem;\n"], ["\n  padding-left: 5px;\n  min-width: 3rem;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
