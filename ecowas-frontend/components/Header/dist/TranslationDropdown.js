"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_1 = require("@emotion/styled");
require("/node_modules/flag-icons/css/flag-icons.min.css");
var context_1 = require("utils/context");
var constants_1 = require("utils/constants");
var DropdownContainer = styled_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  margin-top: 1.5rem;\n"], ["\n  display: inline-block;\n  margin-top: 1.5rem;\n"])));
var DropdownToggle = styled_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border: none;\n  background-color: transparent;\n  padding: 0;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  font-size: 0.8rem;\n"], ["\n  border: none;\n  background-color: transparent;\n  padding: 0;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  font-size: 0.8rem;\n"])));
var DropdownContent = styled_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: ", ";\n  display: flex;\n  border-radius: 5px;\n  padding: 10px;\n  text-align: center;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0;\n  z-index: 1;\n"], ["\n  display: ", ";\n  display: flex;\n  border-radius: 5px;\n  padding: 10px;\n  text-align: center;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0;\n  z-index: 1;\n"])), function (_a) {
    var isOpen = _a.isOpen;
    return (isOpen ? "flex" : "none");
});
var FlagIcon = styled_1["default"].span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 30px;\n  height: 20px;\n  margin-right: 10px;\n  border-radius: 3px;\n"], ["\n  width: 30px;\n  height: 20px;\n  margin-right: 10px;\n  border-radius: 3px;\n"])));
var TranslationDropdown = function () {
    var _a;
    var _b = react_1.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = context_1.useLanguageContext(), language = _c.language, setLanguage = _c.setLanguage;
    var toggleDropdown = function () {
        setIsOpen(!isOpen);
    };
    var updateLanguage = function (language) {
        setLanguage(language);
        toggleDropdown();
    };
    var flagClassName = (_a = {},
        _a[constants_1.LANGUAGES.EN] = {
            title: "English",
            className: "fi fi-gb"
        },
        _a[constants_1.LANGUAGES.FR] = {
            title: "Francais",
            className: "fi fi-fr"
        },
        _a[constants_1.LANGUAGES.PO] = {
            title: "Portuguese",
            className: "fi fi-pt"
        },
        _a);
    return (React.createElement(DropdownContainer, null,
        React.createElement(DropdownToggle, { onClick: toggleDropdown },
            "x",
            React.createElement(FlagIcon, { className: flagClassName[language].className }),
            React.createElement("div", null, flagClassName[language].title)),
        isOpen && (React.createElement(DropdownContent, { isOpen: isOpen },
            language !== constants_1.LANGUAGES.EN && (React.createElement(DropdownToggle, { onClick: function () { return updateLanguage(constants_1.LANGUAGES.EN); } },
                React.createElement(FlagIcon, { className: "fi fi-gb" }),
                React.createElement("div", null, flagClassName[constants_1.LANGUAGES.EN].title))),
            language !== constants_1.LANGUAGES.FR && (React.createElement(DropdownToggle, { onClick: function () { return updateLanguage(constants_1.LANGUAGES.FR); } },
                React.createElement(FlagIcon, { className: "fi fi-fr" }),
                React.createElement("div", null, flagClassName[constants_1.LANGUAGES.FR].title))),
            language !== constants_1.LANGUAGES.PO && (React.createElement(DropdownToggle, { onClick: function () { return updateLanguage(constants_1.LANGUAGES.PO); } },
                React.createElement(FlagIcon, { className: "fi fi-pt" }),
                React.createElement("div", null, flagClassName[constants_1.LANGUAGES.PO].title)))))));
};
exports["default"] = TranslationDropdown;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
