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
exports.KpiController = void 0;
var common_1 = require("@nestjs/common");
var KpiController = /** @class */ (function () {
    function KpiController(kpiService) {
        this.kpiService = kpiService;
    }
    KpiController.prototype.findAllKPIs = function () {
        return this.kpiService.findAllKPIs();
    };
    KpiController.prototype.findAllMainKPIs = function () {
        return this.kpiService.findAllMainKPIs();
    };
    KpiController.prototype.findAllKpiNestedKpis = function (kpi) {
        return this.kpiService.findAllNestedKpis(kpi);
    };
    __decorate([
        common_1.Get()
    ], KpiController.prototype, "findAllKPIs");
    __decorate([
        common_1.Get('/main')
    ], KpiController.prototype, "findAllMainKPIs");
    __decorate([
        common_1.Get(':kpi/nested'),
        __param(0, common_1.Param('kpi'))
    ], KpiController.prototype, "findAllKpiNestedKpis");
    KpiController = __decorate([
        common_1.Controller('kpi')
    ], KpiController);
    return KpiController;
}());
exports.KpiController = KpiController;
