import { Inject, Injectable } from '@nestjs/common';
import IGetReferrerInput from '../ports/in/getReferrer.input';
import IGetReferrerOutput from '../ports/out/getReferrer.output';
import Referrer from '../referrer';

/**
 * Adaptador/Serviço contêm:
 * - Porta de entrada para acessar a regra de negócio
 * - Injeção da porta de saída
 */
@Injectable()
export default class GetReferrerAdapterInput implements IGetReferrerInput {
  constructor(
    @Inject('IGetReferrerOutput')
    private readonly iGetReferrerOutput: IGetReferrerOutput,
  ) {}

  execute(): Referrer {
    return this.iGetReferrerOutput.findAll();
  }
}
