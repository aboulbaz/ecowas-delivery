import { Test, TestingModule } from '@nestjs/testing';
import { KpiValuesController } from './kpi_values.controller';
import { KpiValuesService } from './kpi_values.service';

describe('KpiValuesController', () => {
  let controller: KpiValuesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KpiValuesController],
      providers: [KpiValuesService],
    }).compile();

    controller = module.get<KpiValuesController>(KpiValuesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
