import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ReferrerDto } from 'src/referrer/domain/dto/referrer.dto';
import ReferrerService from '../service/referrer.service';

/**
 * Controller contem apenas a injeção da porta de entrada
 */
@Controller('referrer')
export default class ReferrerController {
  constructor(private readonly service: ReferrerService) {}

  @Get()
  async getAll() {
    return await this.service.getAll();
  }

  @Post()
  async store(@Body() body: ReferrerDto) {
    await this.service.store(body);
  }

  @Put(':id')
  async update() {
    return await this.service.update();
  }

  @Delete(':id')
  async delete() {
    return await this.service.delete();
  }
}
