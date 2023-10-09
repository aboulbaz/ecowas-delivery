import { Module } from '@nestjs/common';
import { KpiValuesService } from './kpi_values.service';
import { KpiValuesController } from './kpi_values.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KpiValue } from './entities/kpi_value.entity';

@Module({
  imports: [TypeOrmModule.forFeature([KpiValue])],
  controllers: [KpiValuesController],
  providers: [KpiValuesService],
})
export class KpiValuesModule {}
