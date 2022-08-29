import { Injectable } from '@nestjs/common';
import Referrer from 'src/referrer/domain/referrer';
import RegisterReferrerUseCase from 'src/referrer/domain/useCase/registerReferrerUseCase';
import { ReferrerDto } from './../../domain/dto/registerReferrer.dto';

@Injectable()
export default class RegisterReferrerService {
  constructor(readonly registerReferrerUseCase: RegisterReferrerUseCase) {}

  execute(payload: ReferrerDto): Referrer {
    const { name, email, birthday, crm } = payload;

    const referrer = new Referrer(name, email, new Date(birthday), crm);

    return this.registerReferrerUseCase.execute(referrer);
  }
}
