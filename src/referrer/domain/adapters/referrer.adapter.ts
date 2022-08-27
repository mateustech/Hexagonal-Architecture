import { Inject, Injectable } from '@nestjs/common';
import { ApiResponse, ReferrerDto } from '../dto/referrer.dto';
import ReferrerInput from '../ports/referrer.input';
import ReferrerOutput from '../ports/referrer.output';
import Referrer from '../referrer';

/**
 * Adaptador/Serviço contêm:
 * - Porta de entrada para acessar a regra de negócio
 * - Injeção da porta de saída
 */
@Injectable()
export default class ReferrerAdapterInput implements ReferrerInput {
  constructor(
    @Inject('ReferrerOutput')
    private readonly port: ReferrerOutput,
  ) {}

  getAll(): ApiResponse<Referrer[]> {
    return this.port.findAll();
  }

  store(payload: ReferrerDto): void {
    const { name, email, birthday, crm } = payload;
    const referrer = new Referrer(name, email, new Date(birthday), crm);
    this.port.save(referrer);
  }

  update(): ApiResponse<Referrer> {
    return;
  }

  delete(): void {
    return;
  }
}
