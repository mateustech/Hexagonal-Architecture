import { Injectable } from '@nestjs/common';
import { ReferrerDto } from '../domain/dto/registerReferrer.dto';
import Referrer from '../domain/referrer';
import RegisterReferrerUseCase from '../domain/useCase/registerReferrerUseCase';

@Injectable()
export default class RegisterReferrerService {
  constructor(readonly registerReferrerUseCase: RegisterReferrerUseCase) {}

  execute(payload: ReferrerDto): Referrer {
    const { name, email, birthday, crm } = payload;

    const referrer = new Referrer(name, email, new Date(birthday), crm);

    return this.registerReferrerUseCase.execute(referrer);
  }
}
