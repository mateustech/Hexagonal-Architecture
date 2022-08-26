import { Controller, Get } from '@nestjs/common';
import GetReferrerService from '../service/getReferrer.service';

/**
 * Controller contem apenas a injeção da porta de entrada
 */
@Controller('referrer')
export default class GetReferrerController {
  constructor(private readonly service: GetReferrerService) {}

  @Get()
  async execute() {
    return await this.service.execute();
  }
}
