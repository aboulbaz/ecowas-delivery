import { Controller, Get, Param, Query } from '@nestjs/common';
import { GenderKpiValuesService } from './gender_kpi_values.service';

@Controller('gender-kpi-values')
export class GenderKpiValuesController {
  constructor(private readonly kpiValuesService: GenderKpiValuesService) {}

  @Get('/hcd-gender-index')
  findHcdGenderIndex() {
    return this.kpiValuesService.findHcdGenderIndex();
  }

  @Get('index/all')
  findAllKpiIndexValues() {
    return this.kpiValuesService.findAllKpiIndexValues();
  }

  @Get('index/all/:id')
  findAllKpiIndexById(@Param('id') id: number) {
    return this.kpiValuesService.findAllKpiIndex(id);
  }

  @Get('index/:country')
  findKpiIndexByCountry(@Param('country') country: number) {
    return this.kpiValuesService.findKpiIndexByCountry(country);
  }

  @Get('all')
  findKpiByCountry(@Query('country') country: number) {
    return this.kpiValuesService.findKpiByCountry(country);
  }

  @Get()
  findKpiDetailsByCountry(
    @Query('country') country: number,
    @Query('kpi') kpi: number,
  ) {
    return this.kpiValuesService.findKpiDetailsByCountry(country, kpi);
  }

  @Get('/kpi')
  findKpiDetailsByKpi(@Query('kpi') kpi: number) {
    return this.kpiValuesService.findKpiDetailsByKpi(kpi);
  }

  @Get('/nested')
  findNestedKpiDetailsByCountry(
    @Query('country') country: number,
    @Query('kpi') kpi: number,
  ) {
    return this.kpiValuesService.findNestedKpiDetailsByCountry(country, kpi);
  }
}
