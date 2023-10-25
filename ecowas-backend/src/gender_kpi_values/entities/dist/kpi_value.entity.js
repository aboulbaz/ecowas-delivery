"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.KpiValue = void 0;
var country_entity_1 = require("src/country/entities/country.entity");
var kpi_entity_1 = require("src/kpi/entities/kpi.entity");
var typeorm_1 = require("typeorm");
var KpiValue = /** @class */ (function () {
    function KpiValue() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], KpiValue.prototype, "id");
    __decorate([
        typeorm_1.Column({ type: 'float', nullable: true })
    ], KpiValue.prototype, "ranking");
    __decorate([
        typeorm_1.Column({ type: 'float', nullable: true })
    ], KpiValue.prototype, "baseline");
    __decorate([
        typeorm_1.Column({ type: 'float', "default": 0, name: 'baseline_normalized' })
    ], KpiValue.prototype, "baselineNormalized");
    __decorate([
        typeorm_1.Column({ type: 'float', name: 'latest_value', nullable: true })
    ], KpiValue.prototype, "latestValue");
    __decorate([
        typeorm_1.Column({ type: 'float', "default": 0, name: 'latest_data_normalized' })
    ], KpiValue.prototype, "latestValueNormalized");
    __decorate([
        typeorm_1.Column({ type: 'float', name: 'target_latest_value', nullable: true })
    ], KpiValue.prototype, "targetLatestValue");
    __decorate([
        typeorm_1.Column({
            type: 'float',
            name: 'target_latest_value_normalized',
            nullable: true
        })
    ], KpiValue.prototype, "targetLatestValueNormalized");
    __decorate([
        typeorm_1.Column({ type: 'float', name: 'target2030', nullable: true })
    ], KpiValue.prototype, "target2030");
    __decorate([
        typeorm_1.Column({ type: 'float', "default": 0, name: 'target2030_normalized' })
    ], KpiValue.prototype, "target2030Normalized");
    __decorate([
        typeorm_1.Column({ type: 'float', name: 'progress_made', nullable: true })
    ], KpiValue.prototype, "progressMade");
    __decorate([
        typeorm_1.Column({ type: 'float', name: 'distance_to_target', nullable: true })
    ], KpiValue.prototype, "distanceToTarget");
    __decorate([
        typeorm_1.Column({ type: 'float', name: 'direction_good_performance', nullable: true })
    ], KpiValue.prototype, "directionGoodPerformance");
    __decorate([
        typeorm_1.ManyToOne(function () { return kpi_entity_1.Kpi; }, function (kpi) { return kpi.id; }, {
            nullable: false,
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        }),
        typeorm_1.JoinColumn({ name: 'kpi_id' })
    ], KpiValue.prototype, "kpi");
    __decorate([
        typeorm_1.ManyToOne(function () { return country_entity_1.Country; }, function (country) { return country.id; }, { nullable: false }),
        typeorm_1.JoinColumn({ name: 'country_id' })
    ], KpiValue.prototype, "country");
    KpiValue = __decorate([
        typeorm_1.Entity()
    ], KpiValue);
    return KpiValue;
}());
exports.KpiValue = KpiValue;
