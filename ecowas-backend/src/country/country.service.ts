import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from './entities/country.entity';
import { IsNull, Repository } from 'typeorm';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(Country)
    private countryRepository: Repository<Country>,
  ) {}

  async findAll() {
    return await this.countryRepository.find();
  }
  async findHcdGenderIndex() {
    try {
      const countries = await this.countryRepository.find({
        where: {
          kpiValues: {
            kpi: {
              parent: IsNull(),
            },
          },
        },
        relations: ['kpiValues', 'kpiValues.kpi'],
      });
      return countries;
    } catch (error) {
      console.log(error);
      throw new NotFoundException();
    }
  }
}
