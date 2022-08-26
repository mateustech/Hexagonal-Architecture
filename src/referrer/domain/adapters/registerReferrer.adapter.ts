import { Injectable } from '@nestjs/common';
import IRegisterReferrerInput from 'src/referrer/domain/ports/in/registerReferrer.input';
import { ReferrerDto } from '../dto/registerReferrer.dto';
import IReferrerRegisterOutput from '../ports/out/registerReferrer.output';
import Referrer from '../referrer';

/**
 * Adaptador/Serviço contêm:
 * - Porta de entrada para acessar a regra de negócio
 * - Injeção da porta de saída
 */
@Injectable()
export default class RegisterReferrerAdapter implements IRegisterReferrerInput {
  constructor(readonly iReferrerRegisterOutput: IReferrerRegisterOutput) {}

  execute(payload: ReferrerDto) {
    const { name, email, birthday, crm } = payload;

    const referrer = new Referrer(name, email, new Date(birthday), crm);

    this.iReferrerRegisterOutput.save(referrer);
  }
}
