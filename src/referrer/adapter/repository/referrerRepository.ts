import { generateId } from '../../../@shared/domain/entity';
import ReferrerRepository from '../../domain/port/out/referrerRepository';
import Referrer from '../../domain/referrer';

import ReferrerModel from './referrerModel';

export default class ReferrerRepositoryDB implements ReferrerRepository {
  private referrers: ReferrerModel[] = [];

  countByEmail(email: string): number {
    return this.referrers.filter(
      (referrer) => referrer.email === email.toLowerCase(),
    ).length;
  }
  save(referrer: Referrer): string {
    const { name, email, birthday, crm } = referrer;
    const id = generateId();
    const referrerModel = new ReferrerModel(id, name, email, birthday, crm);
    this.referrers.push(referrerModel);
    return referrerModel.id;
  }
}
