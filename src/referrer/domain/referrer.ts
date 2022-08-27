import { generateId } from 'src/@shared/domain/entity';

/**
 * Regra de negócio
 */
export default class Referrer {
  private id: string;
  constructor(
    readonly name: string,
    readonly email: string,
    readonly birthday: Date,
    readonly crm: string,
  ) {
    this.id = generateId();
  }
}
