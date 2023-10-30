import { Controller, Get, Post, Put } from '@nestjs/common';
import { CountryService } from './country.service';

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get()
  async findAll() {
    return await this.countryService.findAll();
  }

  @Get('hcd-gender-index')
  async findHcdGenderIndex() {
    return await this.countryService.findHcdGenderIndex();
  }
}
