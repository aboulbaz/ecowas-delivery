import { Controller, Get, Param } from '@nestjs/common';
import { KpiService } from './kpi.service';

@Controller('kpi')
export class KpiController {
  constructor(private readonly kpiService: KpiService) {}

  @Get()
  findAllKPIs() {
    return this.kpiService.findAllKPIs();
  }

  @Get('/main')
  findAllMainKPIs() {
    return this.kpiService.findAllMainKPIs();
  }

  @Get(':kpi/nested')
  findAllKpiNestedKpis(@Param('kpi') kpi: number) {
    return this.kpiService.findAllNestedKpis(kpi);
  }
}
