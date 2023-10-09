import { Controller, Get, Post, Put } from '@nestjs/common';
import { CountryService } from './country.service';

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get()
  findAll() {
    return this.countryService.findAll();
  }
  /* 
  HTTP REQUESTS VERBS:
   - GET REQUEST
   - POST REQUEST
   - PUT REQUEST
   - DELETE REQUEST
  */
}
