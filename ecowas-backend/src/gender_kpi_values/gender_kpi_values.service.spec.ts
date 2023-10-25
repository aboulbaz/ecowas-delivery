import { Test, TestingModule } from '@nestjs/testing';
import { GenderKpiValuesService } from './gender_kpi_values.service';

describe('GenderKpiValuesService', () => {
  let service: GenderKpiValuesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenderKpiValuesService],
    }).compile();

    service = module.get<GenderKpiValuesService>(GenderKpiValuesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
