import { Injectable } from '@nestjs/common';
import { ApiResponse } from 'src/referrer/domain/dto/referrer.dto';
import ReferrerOutput from 'src/referrer/domain/ports/referrer.output';
import ReferrerRepositoryDB from 'src/referrer/infra/repository/referrerRepository';

import Referrer from '../../domain/referrer';

/**
 * O Adaptador de saída contem:
 * - A impl da porta de saída
 * - Injeção de dependência do reposítorio (repository que utiliza a ORM)
 * - Método de execução com a lógica de persistência
 */
@Injectable()
export default class ReferrerOncoAdapter implements ReferrerOutput {
  constructor(private readonly referrerRepository: ReferrerRepositoryDB) {}

  /**
   *
   * @returns ApiResponse<Referrer[]>
   */
  findAll(): ApiResponse<Referrer[]> {
    const referrers = this.referrerRepository
      .findAll()
      .map(
        (referrer) =>
          new Referrer(
            referrer.name,
            referrer.email,
            referrer.birthday,
            referrer.crm,
          ),
      );
    return {
      origin: 'onco',
      data: referrers,
    };
  }

  /**
   *
   * @param referrer
   */
  save(referrer: Referrer) {
    this.referrerRepository.save(referrer);
  }
}
