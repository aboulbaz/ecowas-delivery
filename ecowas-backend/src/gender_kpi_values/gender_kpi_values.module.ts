import { Module } from '@nestjs/common';
import { GenderKpiValuesService } from './gender_kpi_values.service';
import { GenderKpiValuesController } from './gender_kpi_values.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenderKpiValue } from './entities/kpi_value.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GenderKpiValue])],
  controllers: [GenderKpiValuesController],
  providers: [GenderKpiValuesService],
})
export class GenderKpiValuesModule {}
