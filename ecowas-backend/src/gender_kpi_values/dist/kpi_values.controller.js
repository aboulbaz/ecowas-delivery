"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.KpiValuesController = void 0;
var common_1 = require("@nestjs/common");
var KpiValuesController = /** @class */ (function () {
    function KpiValuesController(kpiValuesService) {
        this.kpiValuesService = kpiValuesService;
    }
    KpiValuesController.prototype.findAllKpiIndexValues = function () {
        return this.kpiValuesService.findAllKpiIndexValues();
    };
    KpiValuesController.prototype.findAllKpiIndexById = function (id) {
        return this.kpiValuesService.findAllKpiIndex(id);
    };
    KpiValuesController.prototype.findKpiIndexByCountry = function (country) {
        return this.kpiValuesService.findKpiIndexByCountry(country);
    };
    KpiValuesController.prototype.findKpiByCountry = function (country) {
        return this.kpiValuesService.findKpiByCountry(country);
    };
    KpiValuesController.prototype.findKpiDetailsByCountry = function (country, kpi) {
        return this.kpiValuesService.findKpiDetailsByCountry(country, kpi);
    };
    KpiValuesController.prototype.findKpiDetailsByKpi = function (kpi) {
        return this.kpiValuesService.findKpiDetailsByKpi(kpi);
    };
    KpiValuesController.prototype.findNestedKpiDetailsByCountry = function (country, kpi) {
        return this.kpiValuesService.findNestedKpiDetailsByCountry(country, kpi);
    };
    __decorate([
        common_1.Get('index/all')
    ], KpiValuesController.prototype, "findAllKpiIndexValues");
    __decorate([
        common_1.Get('index/all/:id'),
        __param(0, common_1.Param('id'))
    ], KpiValuesController.prototype, "findAllKpiIndexById");
    __decorate([
        common_1.Get('index/:country'),
        __param(0, common_1.Param('country'))
    ], KpiValuesController.prototype, "findKpiIndexByCountry");
    __decorate([
        common_1.Get('all'),
        __param(0, common_1.Query('country'))
    ], KpiValuesController.prototype, "findKpiByCountry");
    __decorate([
        common_1.Get(),
        __param(0, common_1.Query('country')),
        __param(1, common_1.Query('kpi'))
    ], KpiValuesController.prototype, "findKpiDetailsByCountry");
    __decorate([
        common_1.Get('/kpi'),
        __param(0, common_1.Query('kpi'))
    ], KpiValuesController.prototype, "findKpiDetailsByKpi");
    __decorate([
        common_1.Get('/nested'),
        __param(0, common_1.Query('country')),
        __param(1, common_1.Query('kpi'))
    ], KpiValuesController.prototype, "findNestedKpiDetailsByCountry");
    KpiValuesController = __decorate([
        common_1.Controller('kpi-values')
    ], KpiValuesController);
    return KpiValuesController;
}());
exports.KpiValuesController = KpiValuesController;
