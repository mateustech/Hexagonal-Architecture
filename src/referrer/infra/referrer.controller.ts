import { Body, Controller, Post } from '@nestjs/common';
import RegisterReferrerService from '../application/registerReferrerService';
import { ReferrerDto } from '../domain/dto/registerReferrer.dto';

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
