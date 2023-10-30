import { Controller, Get, Param } from '@nestjs/common';
import { KpiService } from './kpi.service';

@Controller('kpi')
export class KpiController {
  constructor(private readonly kpiService: KpiService) {}

  @Get()
  findAllKPIs() {
    return this.kpiService.findAllKPIs();
  }

  @Get('/gender-index')
  findAllGenderIndexKPIs() {
    return this.kpiService.findAllGenderIndexKPIs();
  }

  @Get('/main')
  findAllMainKPIs() {
    return this.kpiService.findAllMainKPIs();
  }

  @Get('/gender-index/main')
  findAllMainGenderIndexKPIs() {
    return this.kpiService.findAllMainGenderIndexKPIs();
  }

  @Get(':kpi/nested')
  findAllKpiNestedKpis(@Param('kpi') kpi: number) {
    return this.kpiService.findAllNestedKpis(kpi);
  }

  @Get('/gender-index/:kpi/nested')
  findAllNestedGenderKpis(@Param('kpi') kpi: number) {
    return this.kpiService.findAllNestedGenderKpis(kpi);
  }
}
