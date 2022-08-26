import { Inject, Injectable } from '@nestjs/common';
import ReferrerRepositoryDB from 'src/referrer/infra/repository/referrerRepository';
import IRegisterReferrerOutput from '../../domain/ports/out/registerReferrer.output';

import Referrer from '../../domain/referrer';

/**
 * O Adaptador de saída contem:
 * - A impl da porta de saída
 * - Injeção de dependência do reposítorio (repository que utiliza a ORM)
 * - Método de execução com a lógica de persistência
 */
@Injectable()
export default class RegisterReferrerUseCase
  implements IRegisterReferrerOutput
{
  constructor(
    @Inject('ReferrerRepositoryDb')
    private readonly referrerRepository: ReferrerRepositoryDB,
  ) {}

  /**
   *
   * @param referrer
   */
  save(referrer: Referrer) {
    this.referrerRepository.save(referrer);
  }
}
