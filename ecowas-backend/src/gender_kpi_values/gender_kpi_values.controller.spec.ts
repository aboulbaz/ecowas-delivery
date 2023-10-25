import { Test, TestingModule } from '@nestjs/testing';
import { GenderKpiValuesController } from './gender_kpi_values.controller';
import { GenderKpiValuesService } from './gender_kpi_values.service';

describe('GenderKpiValuesController', () => {
  let controller: GenderKpiValuesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GenderKpiValuesController],
      providers: [GenderKpiValuesService],
    }).compile();

    controller = module.get<GenderKpiValuesController>(
      GenderKpiValuesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
