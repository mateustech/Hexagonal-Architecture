/**
 * Service contém a logica de aplicação
 */
import { Inject, Injectable } from '@nestjs/common';
import IGetReferrerInput from 'src/referrer/domain/ports/in/getReferrer.input';

@Injectable()
export default class GetReferrerService {
  constructor(
    @Inject('IGetReferrerInput') private readonly port: IGetReferrerInput,
  ) {}

  async execute() {
    return this.port.execute();
  }
}
