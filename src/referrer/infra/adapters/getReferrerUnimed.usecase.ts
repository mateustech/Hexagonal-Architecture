import { Injectable } from '@nestjs/common';
import IGetReferrerOutput from 'src/referrer/domain/ports/out/getReferrer.output';
import ReferrerRepositoryDB from 'src/referrer/infra/repository/referrerRepository';

import Referrer from '../../domain/referrer';

/**
 * O Adaptador de saída contem:
 * - A impl da porta de saída
 * - Injeção de dependência do reposítorio (repository que utiliza a ORM)
 * - Método de execução com a lógica de persistência
 */
@Injectable()
export default class GetReferrerUnimedOutput implements IGetReferrerOutput {
  constructor(private readonly referrerRepository: ReferrerRepositoryDB) {}

  /**
   *
   * @param referrer
   */
  findAll(): Referrer {
    console.log('chegou 2');
    const referrer = this.referrerRepository.findAll();
    return new Referrer(
      referrer.name,
      referrer.email,
      referrer.birthday,
      referrer.crm,
    );
  }
}
