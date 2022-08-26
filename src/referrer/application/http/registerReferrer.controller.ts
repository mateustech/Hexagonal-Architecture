import { Body, Controller, Post } from '@nestjs/common';
import { ReferrerDto } from '../../domain/dto/registerReferrer.dto';
import RegisterReferrerService from '../service/registerReferrer.service';

/**
 * Controller contem apenas a injeção da porta de entrada
 */
@Controller('referrer')
export default class RegisterReferrerController {
  constructor(readonly registerReferrerService: RegisterReferrerService) {}

  @Post()
  execute(@Body() body: ReferrerDto) {
    this.registerReferrerService.execute(body);
  }
}
