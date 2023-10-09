"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_chartjs_2_1 = require("react-chartjs-2");
var chart_js_1 = require("chart.js");
var DimensionResultsChart_style_1 = require("./DimensionResultsChart.style");
var emotionColors_1 = require("themes/emotionColors");
require("chartjs-plugin-datalabels");
var react_intl_1 = require("react-intl");
chart_js_1.Chart.register(chart_js_1.CategoryScale, chart_js_1.LinearScale, chart_js_1.BarElement);
var DimensionResultsChart = function (_a) {
    var targetValue = _a.targetValue, baseLine = _a.baseLine, target2030 = _a.target2030, latestValue = _a.latestValue;
    var _b = react_1.useState({
        labels: [""],
        datasets: [
            {
                label: "Latest Value",
                data: [latestValue],
                backgroundColor: emotionColors_1.themeColors.success,
                borderRadius: 10
            },
            {
                label: "Max Value",
                data: [1],
                backgroundColor: emotionColors_1.themeColors.primary,
                borderRadius: 10
            },
        ]
    }), chartData = _b[0], setChartData = _b[1];
    var chosenAxis = "y";
    var optionsBeta = {
        indexAxis: chosenAxis,
        responsive: true,
        maintainAspectRatio: false,
        borderWidth: 0,
        scales: {
            x: {
                max: 1,
                display: false
            },
            y: {
                grid: {
                    display: false
                },
                beginAtZero: true,
                stacked: true
            }
        }
    };
    var plugins = [
        {
            id: "datalabels",
            afterDraw: function (chart) {
                var ctx = chart.ctx;
                chart.data.datasets.forEach(function (dataset, datasetIndex) {
                    var meta = chart.getDatasetMeta(datasetIndex);
                    if (!meta.hidden) {
                        meta.data.forEach(function (element, index) {
                            var _a, _b, _c;
                            if ((meta === null || meta === void 0 ? void 0 : meta.label) === "Latest Value") {
                                var _d = element.getProps([
                                    "x",
                                    "y",
                                    "base",
                                    "width",
                                ]), x = _d.x, y = _d.y, base = _d.base, width = _d.width;
                                var value = ((_a = dataset.data) === null || _a === void 0 ? void 0 : _a[index]) || 0;
                                ctx.textAlign = "left";
                                ctx.textBaseline = "middle";
                                ctx.fillStyle = "white";
                                ctx.font = "bold 10px Arial";
                                ctx.lineWidth = 10;
                                y = (y + base) / 2.5;
                                if (Number(value) < 0.5) {
                                    ctx.fillText("Latest Value", x + 10, y + 18);
                                    ctx.fillText("2018-20", x + 10, y + 30);
                                    ctx.textAlign = "left";
                                    ctx.textBaseline = "middle";
                                    ctx.fillStyle = "white";
                                    ctx.font = "bold 20px Arial";
                                    ctx.lineWidth = 10;
                                    ctx.fillText("" + (value ? (_b = Number(value)) === null || _b === void 0 ? void 0 : _b.toFixed(2) : "0"), x + 10, y + 50);
                                }
                                else {
                                    ctx.fillText("Latest Value", x - 70, y + 18);
                                    ctx.fillText("2018-20", x - 70, y + 30);
                                    ctx.textAlign = "left";
                                    ctx.textBaseline = "middle";
                                    ctx.fillStyle = "white";
                                    ctx.font = "bold 20px Arial";
                                    ctx.lineWidth = 10;
                                    ctx.fillText("" + (value ? (_c = Number(value)) === null || _c === void 0 ? void 0 : _c.toFixed(2) : "0"), x - 70, y + 50);
                                }
                            }
                            ctx.save();
                            ctx.restore();
                        });
                    }
                });
            }
        },
    ];
    react_1.useEffect(function () {
        var data = {
            labels: [""],
            datasets: [
                {
                    label: "Latest Value",
                    data: [latestValue],
                    backgroundColor: emotionColors_1.themeColors.success,
                    borderRadius: 10
                },
                {
                    label: "Max Value",
                    data: [1],
                    backgroundColor: emotionColors_1.themeColors.primary,
                    borderRadius: 10
                },
            ]
        };
        setChartData(data);
    }, [latestValue]);
    return (react_1["default"].createElement(DimensionResultsChart_style_1.ChartWrapper, null,
        react_1["default"].createElement(DimensionResultsChart_style_1.DimensionResultsChartIndicatorWrapper, null,
            react_1["default"].createElement(DimensionResultsChart_style_1.DimensionResultsChartValueWrapper, { value: baseLine * 100, color: "#7F7F7F" },
                react_1["default"].createElement(DimensionResultsChart_style_1.DimensionResultsChartIndicator, { color: "#7F7F7F" }, baseLine ? baseLine.toFixed(2) : "0"),
                react_1["default"].createElement(DimensionResultsChart_style_1.DimensionResultsChartTitle, null,
                    react_1["default"].createElement(react_intl_1.FormattedMessage, { id: "overview.baseline" })))),
        react_1["default"].createElement(react_chartjs_2_1.Bar, { data: chartData, options: optionsBeta, plugins: plugins }),
        react_1["default"].createElement(DimensionResultsChart_style_1.DimensionResultsChartIndicatorWrapper, null,
            react_1["default"].createElement(DimensionResultsChart_style_1.DimensionResultsChartValueWrapper, { color: "#00B069", value: targetValue * 100 },
                react_1["default"].createElement(DimensionResultsChart_style_1.DimensionResultsChartIndicator, { color: "#00B069" }, targetValue ? targetValue.toFixed(2) : "0"),
                react_1["default"].createElement(DimensionResultsChart_style_1.DimensionResultsChartTitle, null,
                    react_1["default"].createElement(react_intl_1.FormattedMessage, { id: "overview.target-value" }))),
            " ")));
};
exports["default"] = DimensionResultsChart;
