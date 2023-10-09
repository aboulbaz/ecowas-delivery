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
      relations: ['parent'],
    });
  }

  async findAllMainKPIs() {
    return await this.kpiRepository.find({
      where: {
        parent: IsNull(),
      },
    });
  }

  async findAllNestedKpis(id: number) {
    return await this.kpiRepository.find({
      where: {
        parent: {
          id,
        },
      },
      relations: ['parent'],
    });
  }
}
