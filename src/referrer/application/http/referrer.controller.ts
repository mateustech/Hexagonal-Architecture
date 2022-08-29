import { Body, Controller, Post } from '@nestjs/common';
import { ReferrerDto } from '../../domain/dto/registerReferrer.dto';
import RegisterReferrerService from '../service/registerReferrerService';

@Controller('referrer')
export default class ReferrerController {
  constructor(readonly registerReferrerService: RegisterReferrerService) {}

  @Post()
  registerReferrerHandler(@Body() body: ReferrerDto) {
    const { name, email, birthday, crm } = body;

    const result = this.registerReferrerService.execute({
      name,
      email,
      birthday,
      crm,
    });

    return {
      result,
    };
  }
}
