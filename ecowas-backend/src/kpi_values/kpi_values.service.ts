import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { KpiValue } from './entities/kpi_value.entity';
import { IsNull, Repository } from 'typeorm';

@Injectable()
export class KpiValuesService {
  constructor(
    @InjectRepository(KpiValue)
    private kpiValueRepository: Repository<KpiValue>,
  ) {}

  async findAllKpiIndexValues() {
    try {
      const kpiIndex = await this.kpiValueRepository.find({
        join: {
          alias: 'kpiValue',
          innerJoinAndSelect: {
            kpi: 'kpiValue.kpi',
            country: 'kpiValue.country',
          },
        },
        where: {
          kpi: {
            parent: IsNull(),
            isGenderIndexKPI: 1,
          },
        },
        relations: ['kpi', 'country'],
      });
      return kpiIndex;
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async findAllKpiIndex(id: number) {
    try {
      const kpiIndex = await this.kpiValueRepository.find({
        join: {
          alias: 'kpiValue',
          innerJoinAndSelect: {
            kpi: 'kpiValue.kpi',
            country: 'kpiValue.country',
          },
        },
        where: {
          kpi: {
            id,
            parent: IsNull(),
            isGenderIndexKPI: 0,
          },
        },
        relations: ['kpi', 'country'],
      });
      return kpiIndex;
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async findKpiIndexByCountry(country: number) {
    try {
      const kpiIndex = await this.kpiValueRepository.find({
        where: {
          country: {
            id: country,
          },
          kpi: {
            parent: IsNull(),
            isGenderIndexKPI: 0,
          },
        },
        relations: ['kpi', 'country', 'kpi.associatedGenderIndexKpi'],
      });

      const promises = kpiIndex.map(async (kpi) => {
        const associatedKpi = await this.kpiValueRepository.findOne({
          where: {
            country: {
              id: country,
            },
            kpi: {
              id: kpi.kpi.associatedGenderIndexKpi.id,
            },
          },
        });
        return { ...kpi, associatedKpi };
      });

      return await Promise.all(promises);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async findKpiByCountry(country: number) {
    try {
      const kpiIndex = await this.kpiValueRepository.find({
        where: {
          country: {
            id: country,
          },
          kpi: {
            isGenderIndexKPI: 0,
          },
        },
        relations: ['country', 'kpi', 'kpi.parent'],
      });
      return kpiIndex;
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async findKpiDetailsByCountry(country: number, kpi: number) {
    try {
      const kpiIndex = await this.kpiValueRepository.find({
        join: {
          alias: 'kpiValue',
          innerJoinAndSelect: {
            kpi: 'kpiValue.kpi',
            country: 'kpiValue.country',
          },
        },
        where: {
          country: {
            id: country,
          },
          kpi: {
            id: kpi,
            isGenderIndexKPI: 0,
          },
        },
        relations: ['kpi', 'country', 'kpi.parent'],
      });
      return kpiIndex;
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async findKpiDetailsByKpi(kpi: number) {
    try {
      const kpiIndex = await this.kpiValueRepository.find({
        where: {
          kpi: {
            id: kpi,
            isGenderIndexKPI: 0,
          },
        },
        relations: ['kpi', 'country'],
      });
      return kpiIndex;
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async findNestedKpiDetailsByCountry(country: number, kpi: number) {
    try {
      const kpiIndex = await this.kpiValueRepository.find({
        join: {
          alias: 'kpiValue',
          leftJoinAndSelect: {
            kpi: 'kpiValue.kpi',
            country: 'kpiValue.country',
            parent: 'kpi.parent',
          },
        },

        where: {
          country: {
            id: country,
          },
          kpi: [
            {
              id: kpi,
              isGenderIndexKPI: 0,
            },
            {
              parent: {
                id: kpi,
                isGenderIndexKPI: 0,
              },
            },
          ],
        },
        relations: ['kpi', 'country', 'kpi'],
      });
      return kpiIndex;
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async findHcdGenderIndex() {
    try {
      const kpiIndex = await this.kpiValueRepository.find({
        join: {
          alias: 'kpiValue',
          innerJoinAndSelect: {
            kpi: 'kpiValue.kpi',
            country: 'kpiValue.country',
          },
        },
        where: {
          kpi: {
            parent: IsNull(),
            isGenderIndexKPI: 0,
          },
        },
        relations: ['kpi', 'country'],
      });
      return kpiIndex;
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
