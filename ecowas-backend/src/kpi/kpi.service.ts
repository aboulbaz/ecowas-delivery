import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Kpi } from './entities/kpi.entity';
import { IsNull, Repository } from 'typeorm';

@Injectable()
export class KpiService {
  constructor(
    @InjectRepository(Kpi)
    private kpiRepository: Repository<Kpi>,
  ) {}

  async findAllKPIs() {
    return await this.kpiRepository.find({
      where: {
        isGenderIndexKPI: 0,
      },
      relations: ['parent', 'associatedGenderIndexKpi'],
    });
  }

  async findAllGenderIndexKPIs() {
    return await this.kpiRepository.find({
      where: {
        isGenderIndexKPI: 1,
      },
      relations: ['parent', 'associatedGenderIndexKpi'],
    });
  }

  async findAllMainKPIs() {
    return await this.kpiRepository.find({
      where: {
        parent: IsNull(),
        isGenderIndexKPI: 0,
      },
    });
  }

  async findAllMainGenderIndexKPIs() {
    return await this.kpiRepository.find({
      where: {
        parent: IsNull(),
        isGenderIndexKPI: 1,
      },
    });
  }

  async findAllNestedKpis(id: number) {
    return await this.kpiRepository.find({
      where: {
        parent: {
          id,
          isGenderIndexKPI: 0,
        },
      },
      relations: ['parent', 'associatedGenderIndexKpi'],
    });
  }

  async findAllNestedGenderKpis(id: number) {
    return await this.kpiRepository.find({
      where: {
        parent: {
          id,
          isGenderIndexKPI: 1,
        },
      },
      relations: ['parent', 'associatedGenderIndexKpi'],
    });
  }
}
